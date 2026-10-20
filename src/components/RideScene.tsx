import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type Route = "forest" | "coast" | "sunset";
type Props = {
  speed: number;
  running: boolean;
  route: Route;
  playerCount?: 1 | 2;
  opponentSpeed?: number;
  playerDistances?: [number, number];
};
type Vec = [number, number, number];

const palettes = {
  forest: {
    sky: "#dce9df",
    horizon: "#eff1d9",
    ground: "#a8bd7c",
    grass: "#a6bc77",
    leaf: "#708e50",
    leafLight: "#91a563",
    darkLeaf: "#4e734e",
    hill: "#99ac8f",
    farHill: "#a6beb5",
    water: "#a3c8b3",
    light: "#fff1cf",
  },
  coast: {
    sky: "#cde6e8",
    horizon: "#edf2df",
    ground: "#b8c88c",
    grass: "#b2c086",
    leaf: "#6f9672",
    leafLight: "#a1b57c",
    darkLeaf: "#4b7d67",
    hill: "#a5c0ae",
    farHill: "#c0d5cb",
    water: "#82c5c4",
    light: "#fff2d5",
  },
  sunset: {
    sky: "#efdac9",
    horizon: "#f7e8c8",
    ground: "#b7bc80",
    grass: "#b1b574",
    leaf: "#80915e",
    leafLight: "#b0ac70",
    darkLeaf: "#657b55",
    hill: "#b2ae91",
    farHill: "#c9c1ac",
    water: "#b9c3b4",
    light: "#ffd5a3",
  },
};

/** A self-contained, procedural cycling world. Distances are in metres. */
export default function RideScene({
  speed,
  running,
  route,
  playerCount = 1,
  opponentSpeed = 0,
  playerDistances,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef({
    speed,
    running,
    playerCount,
    opponentSpeed,
    playerDistances,
  });
  const routeRef = useRef(route);
  const changeRouteRef = useRef<((next: Route) => void) | null>(null);
  const changePlayersRef = useRef<((count: 1 | 2) => void) | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    motionRef.current = {
      speed,
      running,
      playerCount,
      opponentSpeed,
      playerDistances,
    };
  }, [speed, running, playerCount, opponentSpeed, playerDistances]);
  useEffect(() => {
    changePlayersRef.current?.(playerCount);
  }, [playerCount]);
  useEffect(() => {
    routeRef.current = route;
    changeRouteRef.current?.(route);
  }, [route]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch {
      setUnavailable(true);
      return;
    }
    const scene = new THREE.Scene();
    const initialPalette = palettes[routeRef.current];
    scene.background = new THREE.Color(initialPalette.sky);
    scene.fog = new THREE.Fog(initialPalette.horizon, 48, 160);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.domElement.setAttribute(
      "aria-label",
      "3D 森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進",
    );
    renderer.domElement.setAttribute("role", "img");
    renderer.domElement.style.cssText =
      "display:block;width:100%;height:100%;outline:none";
    host.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 300);
    camera.position.set(3.5, 4.8, 12.3);
    camera.lookAt(-3, 1.1, -10);
    const hemi = new THREE.HemisphereLight("#fff9e8", "#88986b", 1.7);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(initialPalette.light, 2.3);
    sun.position.set(-18, 28, -16);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1536, 1536);
    sun.shadow.camera.left = -35;
    sun.shadow.camera.right = 35;
    sun.shadow.camera.top = 24;
    sun.shadow.camera.bottom = -42;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 100;
    sun.shadow.normalBias = 0.045;
    sun.shadow.bias = -0.00015;
    sun.shadow.radius = 4;
    sun.target.position.set(0, 0, -12);
    scene.add(sun, sun.target);

    const mat = (color: THREE.ColorRepresentation, roughness = 0.95) =>
      new THREE.MeshStandardMaterial({ color, roughness });
    const materials = {
      ground: mat(initialPalette.ground),
      grass: mat(initialPalette.grass),
      leaf: mat(initialPalette.leaf),
      leafLight: mat(initialPalette.leafLight),
      darkLeaf: mat(initialPalette.darkLeaf),
      hill: mat(initialPalette.hill),
      farHill: mat(initialPalette.farHill),
      water: new THREE.MeshStandardMaterial({
        color: initialPalette.water,
        roughness: 0.35,
        metalness: 0.07,
      }),
      bark: mat("#867651"),
      paleBark: mat("#d7d4b4"),
      road: mat("#ddcba5"),
      edge: mat("#e6dab9"),
      rock: mat("#b9bbaa"),
      rockLight: mat("#cccdb8"),
      flower: mat("#f6e5a0"),
      flowerWhite: mat("#f4f1d5"),
      stem: mat("#849254"),
      fence: mat("#a59a71"),
      stripe: mat("#dce8d9"),
    };

    // Soft sky gradient, entirely geometry: no environment image is required.
    const skyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        top: { value: new THREE.Color(initialPalette.sky) },
        bottom: { value: new THREE.Color(initialPalette.horizon) },
      },
      vertexShader:
        "varying vec3 vWorld; void main(){vec4 p=modelMatrix*vec4(position,1.0);vWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",
      fragmentShader:
        "uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld; void main(){float h=clamp(normalize(vWorld+vec3(0.,20.,0.)).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,smoothstep(0.,.65,h)),1.);\n#include <colorspace_fragment>\n}",
      side: THREE.BackSide,
      depthWrite: false,
    });
    scene.add(
      new THREE.Mesh(new THREE.SphereGeometry(245, 24, 18), skyMaterial),
    );

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(450, 450),
      materials.ground,
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, -0.035, -100);
    ground.receiveShadow = true;
    scene.add(ground);

    const random = (() => {
      let seed = 4917;
      return () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
    })();
    const curve = (z: number) =>
      Math.sin(z * 0.035) * 3.5 * Math.min(1, Math.abs(z) / 22);
    function ribbon(
      width: number,
      center: (z: number) => number,
      y: number,
      material: THREE.Material,
    ) {
      const vertices: number[] = [];
      const indices: number[] = [];
      for (let i = 0; i <= 200; i++) {
        const z = 20 - i;
        const x = center(z);
        vertices.push(x - width / 2, y, z, x + width / 2, y, z);
        if (i < 200) {
          const a = i * 2;
          indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3),
      );
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    }
    ribbon(6.6, curve, 0.005, materials.edge);
    ribbon(6.1, curve, 0.018, materials.road);
    const waterCenter = (z: number) =>
      curve(z) + 15 + Math.sin(z * 0.055) * 3.5;
    const streamShore = ribbon(5.3, waterCenter, -0.018, materials.edge);
    const stream = ribbon(4.3, waterCenter, -0.008, materials.water);
    const coastalWater = new THREE.Group();
    const oceanMaterial = new THREE.MeshStandardMaterial({
      color: "#81bdc7",
      roughness: 0.34,
      metalness: 0.12,
    });
    const sandMaterial = mat("#e3d1a7");
    coastalWater.add(ribbon(200, (z) => curve(z) + 110, 0.001, oceanMaterial));
    coastalWater.add(ribbon(7, (z) => curve(z) + 8.5, 0.003, sandMaterial));
    scene.add(coastalWater);
    coastalWater.visible = routeRef.current === "coast";

    const settingSun = new THREE.Group();
    const solarDisk = new THREE.Mesh(
      new THREE.SphereGeometry(8.5, 24, 16),
      new THREE.MeshBasicMaterial({
        color: "#ffcc83",
        fog: false,
        toneMapped: false,
      }),
    );
    settingSun.add(solarDisk);
    for (const scale of [1.3, 1.8]) {
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(8.5 * scale, 24, 16),
        new THREE.MeshBasicMaterial({
          color: "#ffe7b2",
          transparent: true,
          opacity: 0.075,
          depthWrite: false,
          fog: false,
          toneMapped: false,
        }),
      );
      settingSun.add(halo);
    }
    settingSun.position.set(-35, 30, -135);
    settingSun.visible = routeRef.current === "sunset";
    scene.add(settingSun);

    const sphereGeometry = new THREE.SphereGeometry(1, 12, 10);
    const lowSphere = new THREE.IcosahedronGeometry(1, 1);
    const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 9);
    const coneGeometry = new THREE.ConeGeometry(1, 1, 9);
    const vUp = new THREE.Vector3(0, 1, 0);
    function ball(
      parent: THREE.Object3D,
      position: Vec,
      scale: Vec,
      material: THREE.Material,
      faceted = false,
    ) {
      const mesh = new THREE.Mesh(
        faceted ? lowSphere : sphereGeometry,
        material,
      );
      mesh.position.set(...position);
      mesh.scale.set(...scale);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      return mesh;
    }
    function tube(
      parent: THREE.Object3D,
      from: Vec,
      to: Vec,
      radius: number,
      material: THREE.Material,
    ) {
      const a = new THREE.Vector3(...from),
        b = new THREE.Vector3(...to),
        delta = b.clone().sub(a);
      const mesh = new THREE.Mesh(cylinderGeometry, material);
      mesh.position.copy(a.add(b).multiplyScalar(0.5));
      mesh.scale.set(radius, delta.length(), radius);
      mesh.quaternion.setFromUnitVectors(vUp, delta.normalize());
      mesh.castShadow = true;
      parent.add(mesh);
      return mesh;
    }

    // Rounded, layered hills keep a clear horizon behind the route.
    [
      [-57, -3, -113, 40, 14, 32],
      [41, -4, -132, 52, 20, 28],
      [1, -4, -168, 58, 23, 31],
      [-90, -4, -150, 45, 25, 40],
      [75, -3, -84, 38, 12, 32],
      [-51, -5, -56, 29, 10, 28],
    ].forEach((h, i) =>
      ball(
        scene,
        [h[0], h[1], h[2]],
        [h[3], h[4], h[5]],
        i < 3 ? materials.farHill : materials.hill,
      ),
    );

    const cloudMat = new THREE.MeshStandardMaterial({
      color: "#f7f5e6",
      roughness: 1,
      transparent: true,
      opacity: 0.73,
      depthWrite: false,
    });
    for (let i = 0; i < 7; i++) {
      const cloud = new THREE.Group();
      cloud.position.set(-75 + i * 26, 31 + random() * 8, -115 - random() * 65);
      for (let j = 0; j < 4; j++)
        ball(
          cloud,
          [j * 3.7 - 5, random() * 1.4, random()],
          [5.5, 1.8 + random(), 2.5],
          cloudMat,
        );
      scene.add(cloud);
    }

    function tree(kind: number) {
      const group = new THREE.Group();
      if (kind === 1) {
        tube(group, [0, 0, 0], [0, 4.1, 0], 0.15, materials.bark);
        for (let j = 0; j < 3; j++) {
          const mesh = new THREE.Mesh(
            coneGeometry,
            j === 1 ? materials.leaf : materials.darkLeaf,
          );
          mesh.position.set(0, 2.8 + j * 1.25, 0);
          mesh.scale.set(1.65 - j * 0.38, 2.8 - j * 0.28, 1.65 - j * 0.38);
          mesh.castShadow = true;
          group.add(mesh);
        }
      } else if (kind === 2) {
        tube(group, [0, 0, 0], [0.12, 4.4, 0], 0.16, materials.paleBark);
        tube(group, [0, 2.3, 0], [-0.8, 3.7, 0.15], 0.075, materials.paleBark);
        ball(group, [0, 4.5, 0], [1.38, 1.8, 1.25], materials.leafLight);
        ball(group, [-0.7, 3.7, 0.1], [1.05, 1.25, 1.1], materials.leafLight);
        ball(group, [0.8, 4.25, -0.1], [0.92, 1.3, 1], materials.leaf);
      } else {
        tube(group, [0, 0, 0], [0, 3.9, 0], 0.23, materials.bark);
        tube(group, [0, 2.3, 0], [-0.9, 3.6, 0], 0.11, materials.bark);
        tube(group, [0, 2.7, 0], [0.9, 4.1, 0.1], 0.1, materials.bark);
        ball(group, [0, 4.55, 0], [1.8, 1.7, 1.65], materials.leaf);
        ball(group, [-1.05, 3.9, 0.15], [1.25, 1.3, 1.3], materials.darkLeaf);
        ball(group, [1.1, 4.25, 0.12], [1.25, 1.4, 1.3], materials.leafLight);
        ball(group, [0.1, 5.45, -0.1], [1.25, 1.25, 1.23], materials.leafLight);
      }
      return group;
    }
    const templates = [tree(0), tree(1), tree(2)];
    const moving: {
      object: THREE.Object3D;
      lateral: number;
      z: number;
      stream?: boolean;
    }[] = [];
    const forestTrees = new Set<THREE.Object3D>();
    const coastalSources = new Set<THREE.Object3D>();
    const addMoving = (
      object: THREE.Object3D,
      lateral: number,
      z: number,
      stream = false,
    ) => {
      object.position.x = (stream ? waterCenter(z) : curve(z)) + lateral;
      object.position.z = z;
      scene.add(object);
      moving.push({ object, lateral, z, stream });
    };
    // Deliberate open spaces reveal the stream and hills between groups of trees.
    for (let i = 0; i < 91; i++) {
      const z = 8 - random() * 175;
      const side = i % 2 ? -1 : 1;
      const lateral = side * (7.4 + random() * 30);
      if (side > 0 && lateral > 11 && lateral < 21) continue;
      const object = templates[Math.floor(random() * templates.length)].clone();
      const size = 0.75 + random() * 0.85;
      object.scale.setScalar(size);
      object.rotation.y = random() * Math.PI * 2;
      forestTrees.add(object);
      addMoving(object, lateral, z);
    }
    [
      [-9.6, -9, 1.3],
      [10.3, -22, 1.2],
      [-8.3, -38, 1.2],
    ].forEach(([x, z, size], i) => {
      const object = templates[i % 3].clone();
      object.scale.setScalar(size);
      forestTrees.add(object);
      addMoving(object, x, z);
    });

    // Palms and a wide sea replace the woodland for the coastal route.
    const palmBark = mat("#a18a62");
    const palmLeaves = mat("#5d8c70");
    palmLeaves.side = THREE.DoubleSide;
    const palmLeafVertices: number[] = [],
      palmLeafIndices: number[] = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const width = Math.sin(t * Math.PI) * 0.4;
      const y = Math.sin(t * Math.PI) * 0.45 - t * t * 0.85;
      palmLeafVertices.push(
        -width,
        y,
        t * 3.1,
        0,
        y + 0.1 * Math.sin(t * Math.PI),
        t * 3.1,
        width,
        y,
        t * 3.1,
      );
      if (i < 10) {
        const a = i * 3;
        palmLeafIndices.push(
          a,
          a + 3,
          a + 1,
          a + 1,
          a + 3,
          a + 4,
          a + 1,
          a + 4,
          a + 2,
          a + 2,
          a + 4,
          a + 5,
        );
      }
    }
    const palmLeafGeometry = new THREE.BufferGeometry();
    palmLeafGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(palmLeafVertices, 3),
    );
    palmLeafGeometry.setIndex(palmLeafIndices);
    palmLeafGeometry.computeVertexNormals();
    const palmTemplate = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      tube(
        palmTemplate,
        [(0.12 * i * i) / 4, i, 0],
        [(0.12 * (i + 1) * (i + 1)) / 4, i + 1, 0],
        0.14 - i * 0.008,
        palmBark,
      );
    }
    for (let i = 0; i < 9; i++) {
      const leaf = new THREE.Mesh(palmLeafGeometry, palmLeaves);
      leaf.position.set(0.75, 5, 0);
      leaf.rotation.y = (i * Math.PI * 2) / 9;
      leaf.rotation.x = i % 3 === 0 ? -0.2 : 0.05;
      leaf.castShadow = true;
      palmTemplate.add(leaf);
    }
    for (let i = 0; i < 3; i++)
      ball(
        palmTemplate,
        [0.6 + i * 0.14, 4.9, 0.1],
        [0.15, 0.18, 0.15],
        palmBark,
      );
    [
      [-8, -8],
      [7.3, -20],
      [-9, -32],
      [6.5, -43],
      [-9, -58],
      [6.7, -75],
      [-8, -93],
      [7, -113],
      [-10, -133],
      [7, -151],
    ].forEach(([x, z], i) => {
      const palm = palmTemplate.clone();
      palm.scale.setScalar(0.95 + (i % 3) * 0.12);
      palm.rotation.y = i * 1.7;
      coastalSources.add(palm);
      addMoving(palm, x, z);
    });

    for (let i = 0; i < 110; i++) {
      const patch = new THREE.Group();
      const z = 12 - random() * 165;
      const lateral = (i % 2 ? 1 : -1) * (3.9 + random() * 9);
      const count = 3 + Math.floor(random() * 5);
      for (let j = 0; j < count; j++) {
        const x = (random() - 0.5) * 1.4,
          pz = (random() - 0.5) * 1.2;
        const h = 0.14 + random() * 0.19;
        const blade = new THREE.Mesh(coneGeometry, materials.grass);
        blade.position.set(x, h / 2, pz);
        blade.scale.set(0.08, h, 0.08);
        patch.add(blade);
        if (j < 2 && i % 3 !== 0) {
          tube(patch, [x, 0, pz], [x, h + 0.07, pz], 0.013, materials.stem);
          ball(
            patch,
            [x, h + 0.07, pz],
            [0.09, 0.045, 0.09],
            i % 2 ? materials.flower : materials.flowerWhite,
          );
        }
      }
      addMoving(patch, lateral, z);
    }
    for (let i = 0; i < 32; i++) {
      const rock = new THREE.Group();
      const size = 0.2 + random() * 0.5;
      ball(
        rock,
        [0, size * 0.23, 0],
        [size, size * 0.65, size * 0.8],
        i % 2 ? materials.rock : materials.rockLight,
        true,
      );
      if (i % 2 === 0)
        ball(
          rock,
          [size * 0.7, 0.08, size * 0.4],
          [size * 0.5, size * 0.36, size * 0.5],
          materials.rockLight,
          true,
        );
      addMoving(
        rock,
        (i % 2 ? -1 : 1) * (4 + random() * 7),
        8 - random() * 140,
      );
    }
    // A quiet timber fence frames the left side without obscuring the rider.
    for (let i = 0; i < 17; i++) {
      const fence = new THREE.Group();
      tube(fence, [0, 0, 0], [0, 1.1, 0], 0.075, materials.fence);
      tube(fence, [0, 0.48, -0.1], [0, 0.48, -3.7], 0.045, materials.fence);
      tube(fence, [0, 0.92, -0.1], [0, 0.92, -3.7], 0.045, materials.fence);
      addMoving(fence, -5.9, -6 - i * 3.7);
    }
    const rippleGeometry = new THREE.PlaneGeometry(1, 0.035);
    for (let i = 0; i < 26; i++) {
      const ripple = new THREE.Mesh(rippleGeometry, materials.stripe);
      ripple.rotation.x = -Math.PI / 2;
      ripple.scale.x = 0.45 + random() * 1.5;
      ripple.position.y = 0.007;
      addMoving(ripple, (random() - 0.5) * 3, -4 - random() * 145, true);
    }

    // Repeated scenery shares GPU draw calls, including the small flowers and
    // branches. Their source groups retain the repeatable world transforms.
    type InstanceEntry = { source: THREE.Object3D; local: THREE.Matrix4 };
    type SceneryKind = "world" | "forest" | "coast";
    const instanceSources = new Map<
      string,
      {
        geometry: THREE.BufferGeometry;
        material: THREE.Material;
        shadow: boolean;
        receive: boolean;
        kind: SceneryKind;
        entries: InstanceEntry[];
      }
    >();
    for (const item of moving) {
      item.object.updateMatrixWorld(true);
      const inverse = item.object.matrixWorld.clone().invert();
      const kind: SceneryKind = forestTrees.has(item.object)
        ? "forest"
        : coastalSources.has(item.object)
          ? "coast"
          : "world";
      item.object.traverse((object) => {
        if (!(object instanceof THREE.Mesh) || Array.isArray(object.material))
          return;
        const key = `${kind}:${object.geometry.uuid}:${object.material.uuid}:${object.castShadow}:${object.receiveShadow}`;
        let batch = instanceSources.get(key);
        if (!batch) {
          batch = {
            geometry: object.geometry,
            material: object.material,
            shadow: object.castShadow,
            receive: object.receiveShadow,
            kind,
            entries: [],
          };
          instanceSources.set(key, batch);
        }
        batch.entries.push({
          source: item.object,
          local: inverse.clone().multiply(object.matrixWorld),
        });
      });
      scene.remove(item.object);
    }
    const matrix = new THREE.Matrix4();
    const batches = [...instanceSources.values()].map((batch) => {
      const mesh = new THREE.InstancedMesh(
        batch.geometry,
        batch.material,
        batch.entries.length,
      );
      mesh.castShadow = batch.shadow;
      mesh.receiveShadow = batch.receive;
      mesh.frustumCulled = false;
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      batch.entries.forEach((entry, i) =>
        mesh.setMatrixAt(
          i,
          matrix.multiplyMatrices(entry.source.matrixWorld, entry.local),
        ),
      );
      scene.add(mesh);
      return { mesh, entries: batch.entries, kind: batch.kind };
    });

    // Each rider owns all animated objects and materials. Only immutable world
    // geometry is shared, so one player's pedalling cannot move the other.
    function createCyclist(player: 1 | 2) {
      const cyclist = new THREE.Group();
      cyclist.name = player === 1 ? "P1-GreenCyclist" : "P2-BlueCyclist";
      cyclist.position.set(0, 0.04, 2.0);
      scene.add(cyclist);
      const tire = mat("#3f4a43");
      const rim = mat("#c7cdbd", 0.5);
      const metal = mat("#d5d6bd", 0.45);
      const frameMat = mat(player === 1 ? "#3f7568" : "#426d9c", 0.5);
      const dark = mat("#354b44");
      const jersey = mat(player === 1 ? "#568e7b" : "#4a83c2");
      const jerseyLight = mat(player === 1 ? "#6ca18b" : "#72a4db");
      const pants = mat("#3c5149");
      const skin = mat("#dfb58f");
      const helmetMat = mat("#f1e8cd");
      const hairMat = mat("#d9d8cb");
      const shoes = mat("#efdfbf");
      const wheels: THREE.Group[] = [];
      for (const z of [0.91, -1.03]) {
        const wheel = new THREE.Group();
        wheel.position.set(0, 0.58, z);
        const rubber = new THREE.Mesh(
          new THREE.TorusGeometry(0.52, 0.047, 8, 36),
          tire,
        );
        rubber.rotation.y = Math.PI / 2;
        rubber.castShadow = true;
        wheel.add(rubber);
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.467, 0.014, 6, 36),
          rim,
        );
        ring.rotation.y = Math.PI / 2;
        wheel.add(ring);
        tube(wheel, [-0.09, 0, 0], [0.09, 0, 0], 0.043, metal);
        for (let j = 0; j < 12; j++) {
          const a = (j * Math.PI) / 6;
          tube(
            wheel,
            [0, 0, 0],
            [0, Math.cos(a) * 0.46, Math.sin(a) * 0.46],
            0.006,
            rim,
          );
        }
        cyclist.add(wheel);
        wheels.push(wheel);
      }
      const rear: Vec = [0, 0.58, 0.91],
        bb: Vec = [0, 0.55, 0.04],
        seat: Vec = [0, 1.34, 0.36];
      const head: Vec = [0, 1.29, -0.81],
        fork: Vec = [0, 0.58, -1.03];
      [
        [rear, bb],
        [bb, seat],
        [seat, rear],
        [seat, head],
        [head, bb],
        [head, fork],
      ].forEach(([a, b]) => tube(cyclist, a, b, 0.035, frameMat));
      tube(cyclist, [0, 1.23, 0.39], [0, 1.48, 0.44], 0.027, metal);
      ball(cyclist, [0, 1.48, 0.43], [0.22, 0.052, 0.18], dark);
      tube(cyclist, [0, 1.29, -0.81], [0, 1.51, -0.83], 0.024, metal);
      tube(cyclist, [-0.34, 1.52, -0.87], [0.34, 1.52, -0.87], 0.022, metal);
      tube(cyclist, [-0.34, 1.52, -0.87], [-0.34, 1.5, -1.02], 0.034, dark);
      tube(cyclist, [0.34, 1.52, -0.87], [0.34, 1.5, -1.02], 0.034, dark);
      // Rear rack, small reflector and bottle are readable details at this scale.
      tube(cyclist, [-0.15, 0.64, 0.92], [-0.15, 1.16, 0.8], 0.013, metal);
      tube(cyclist, [0.15, 0.64, 0.92], [0.15, 1.16, 0.8], 0.013, metal);
      tube(cyclist, [-0.15, 1.16, 0.5], [-0.15, 1.16, 1.2], 0.016, metal);
      tube(cyclist, [0.15, 1.16, 0.5], [0.15, 1.16, 1.2], 0.016, metal);
      tube(cyclist, [-0.15, 1.16, 1.2], [0.15, 1.16, 1.2], 0.016, metal);
      ball(cyclist, [0, 1.15, 1.23], [0.07, 0.035, 0.02], mat("#c37658"));
      tube(
        cyclist,
        [0.03, 0.74, -0.14],
        [0.03, 0.98, -0.3],
        0.065,
        mat("#e4d6ac"),
      );

      const rider = new THREE.Group();
      cyclist.add(rider);
      ball(rider, [0, 1.64, 0.37], [0.27, 0.2, 0.19], pants);
      const torso = ball(rider, [0, 1.99, 0.17], [0.31, 0.43, 0.22], jersey);
      torso.rotation.x = -0.24;
      ball(rider, [0, 2.18, 0.13], [0.32, 0.15, 0.22], jerseyLight);
      // A reflective strip on the back adds a familiar cycling-shirt detail.
      const backStripe = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.045, 0.014),
        helmetMat,
      );
      backStripe.position.set(0, 1.98, 0.392);
      backStripe.rotation.x = -0.24;
      rider.add(backStripe);
      tube(rider, [0, 2.21, 0.04], [0, 2.37, -0.03], 0.09, skin);
      const headGroup = new THREE.Group();
      headGroup.position.set(0, 2.49, -0.065);
      rider.add(headGroup);
      ball(headGroup, [0, 0, 0], [0.205, 0.235, 0.19], skin);
      ball(headGroup, [0, 0.035, 0.07], [0.211, 0.19, 0.17], hairMat);
      ball(headGroup, [-0.205, -0.015, 0], [0.043, 0.07, 0.045], skin);
      ball(headGroup, [0.205, -0.015, 0], [0.043, 0.07, 0.045], skin);
      ball(headGroup, [0, -0.035, -0.18], [0.05, 0.06, 0.065], skin);
      const helmet = new THREE.Mesh(
        new THREE.SphereGeometry(
          0.254,
          18,
          10,
          0,
          Math.PI * 2,
          0,
          Math.PI * 0.62,
        ),
        helmetMat,
      );
      helmet.position.y = 0.095;
      helmet.scale.set(1, 0.8, 1.1);
      helmet.castShadow = true;
      headGroup.add(helmet);
      for (const x of [-0.13, 0, 0.13]) {
        ball(
          headGroup,
          [x, 0.272 - Math.abs(x) * 0.25, 0.015],
          [0.021, 0.014, 0.125],
          dark,
        );
      }
      tube(headGroup, [-0.19, 0.04, 0.06], [-0.11, -0.19, -0.02], 0.012, dark);
      tube(headGroup, [0.19, 0.04, 0.06], [0.11, -0.19, -0.02], 0.012, dark);
      for (const side of [-1, 1]) {
        const shoulder: Vec = [side * 0.275, 2.18, 0.12];
        const elbow: Vec = [side * 0.36, 1.92, -0.36];
        const hand: Vec = [side * 0.34, 1.53, -0.94];
        tube(rider, shoulder, elbow, 0.082, jersey);
        ball(rider, elbow, [0.065, 0.065, 0.065], skin);
        tube(rider, elbow, hand, 0.058, skin);
        ball(rider, hand, [0.065, 0.055, 0.075], skin);
      }
      const crank = new THREE.Group();
      crank.position.set(0, 0.55, 0.04);
      cyclist.add(crank);
      const gear = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.14, 0.025, 20),
        dark,
      );
      gear.rotation.z = Math.PI / 2;
      gear.position.x = 0.09;
      crank.add(gear);
      const legs = [-1, 1].map((side) => {
        const group = new THREE.Group();
        cyclist.add(group);
        const upper = tube(group, [0, 0, 0], [0, 1, 0], 0.105, pants);
        const lower = tube(group, [0, 0, 0], [0, 1, 0], 0.062, skin);
        const knee = ball(group, [0, 0, 0], [0.075, 0.075, 0.075], skin);
        const shoe = ball(group, [0, 0, 0], [0.085, 0.065, 0.17], shoes);
        const pedal = new THREE.Mesh(
          new THREE.BoxGeometry(0.19, 0.035, 0.13),
          dark,
        );
        group.add(pedal);
        const arm = tube(group, [0, 0, 0], [0, 1, 0], 0.023, metal);
        return { side, upper, lower, knee, shoe, pedal, arm };
      });
      return { cyclist, wheels, crank, legs, phase: 0, traveled: 0 };
    }
    const players = [createCyclist(1), createCyclist(2)];
    players[1].cyclist.visible = false;
    function moveTube(
      mesh: THREE.Mesh,
      a: THREE.Vector3,
      b: THREE.Vector3,
      radius: number,
    ) {
      const direction = b.clone().sub(a);
      mesh.position.copy(a).add(b).multiplyScalar(0.5);
      mesh.scale.set(radius, direction.length(), radius);
      mesh.quaternion.setFromUnitVectors(vUp, direction.normalize());
    }

    // Sunlight particles stay subtle, with no flashing or rapid camera movement.
    const motePositions = new Float32Array(35 * 3);
    for (let i = 0; i < 35; i++) {
      motePositions[i * 3] = (random() - 0.5) * 28;
      motePositions[i * 3 + 1] = 1.2 + random() * 7;
      motePositions[i * 3 + 2] = 8 - random() * 48;
    }
    const moteGeometry = new THREE.BufferGeometry();
    moteGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(motePositions, 3),
    );
    scene.add(
      new THREE.Points(
        moteGeometry,
        new THREE.PointsMaterial({
          color: "#fff4cc",
          size: 0.055,
          transparent: true,
          opacity: 0.75,
          depthWrite: false,
        }),
      ),
    );

    changeRouteRef.current = (next) => {
      const palette = palettes[next];
      (scene.background as THREE.Color).set(palette.sky);
      (scene.fog as THREE.Fog).color.set(palette.horizon);
      skyMaterial.uniforms.top.value.set(palette.sky);
      skyMaterial.uniforms.bottom.value.set(palette.horizon);
      sun.color.set(palette.light);
      coastalWater.visible = next === "coast";
      settingSun.visible = next === "sunset";
      stream.visible = next !== "coast";
      streamShore.visible = next !== "coast";
      sun.position.set(
        next === "sunset" ? -30 : -18,
        next === "sunset" ? 19 : 28,
        -16,
      );
      batches.forEach((batch) => {
        batch.mesh.visible =
          batch.kind === "world" ||
          (batch.kind === "coast" ? next === "coast" : next !== "coast");
      });
      const label =
        next === "coast"
          ? "海岸騎行：長者騎著單車沿著棕櫚樹與藍色海洋前進"
          : next === "sunset"
            ? "夕陽騎行：長者騎著單車穿過暖色山丘與林間小徑"
            : "森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進";
      renderer.domElement.setAttribute(
        "aria-label",
        `3D ${motionRef.current.playerCount === 2 ? "雙人競賽，左側綠色玩家 1、右側藍色玩家 2。" : ""}${label}`,
      );
      for (const key of [
        "ground",
        "grass",
        "leaf",
        "leafLight",
        "darkLeaf",
        "hill",
        "farHill",
        "water",
      ] as const)
        materials[key].color.set(palette[key]);
    };
    changeRouteRef.current(routeRef.current);

    const framePlayers = () => {
      const duel = motionRef.current.playerCount === 2;
      if (duel) {
        camera.position.set(2.7, 5.3, 15);
        camera.lookAt(-1.7, 1.2, -9);
      } else {
        camera.position.set(3.5, 4.8, 12.3);
        camera.lookAt(-3, 1.1, -10);
      }
      camera.fov = camera.aspect < 1.1 ? 58 : 48;
      camera.updateProjectionMatrix();
    };
    const resize = () => {
      const width = host.clientWidth,
        height = host.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      framePlayers();
    };
    changePlayersRef.current = (count) => {
      players[1].cyclist.visible = count === 2;
      players.forEach((player, index) => {
        player.cyclist.position.x =
          count === 2 ? (index === 0 ? -1.1 : 1.1) : 0;
        player.cyclist.position.z = 2;
        player.traveled = 0;
      });
      framePlayers();
      changeRouteRef.current?.(routeRef.current);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    changePlayersRef.current(motionRef.current.playerCount);
    let frame = 0,
      previous = 0;
    function animateCyclist(
      model: ReturnType<typeof createCyclist>,
      velocity: number,
      dt: number,
      isRunning: boolean,
    ) {
      model.phase += velocity * dt * 1.55;
      model.traveled += velocity * dt;
      const { cyclist, wheels, crank, legs, phase } = model;
      wheels.forEach((wheel) => {
        wheel.rotation.x -= (velocity * dt) / 0.52;
      });
      crank.rotation.x = phase;
      if (isRunning) {
        cyclist.rotation.z = velocity > 0 ? Math.sin(phase) * 0.014 : 0;
        cyclist.position.y =
          0.04 + (velocity > 0 ? Math.sin(phase * 2) * 0.006 : 0);
      }
      legs.forEach((leg) => {
        const angle = phase + (leg.side > 0 ? Math.PI : 0);
        const x = leg.side * 0.18;
        const ankle = new THREE.Vector3(
          x,
          0.64 + Math.cos(angle) * 0.225,
          0.04 + Math.sin(angle) * 0.225,
        );
        const hip = new THREE.Vector3(x, 1.57, 0.36);
        // Two-bone leg solution, with the knee bending toward the handlebars.
        const hipToAnkle = ankle.clone().sub(hip);
        const distance = Math.min(hipToAnkle.length(), 1.195);
        const along =
          (0.61 * 0.61 - 0.59 * 0.59 + distance * distance) / (2 * distance);
        const bend = Math.sqrt(Math.max(0, 0.61 * 0.61 - along * along));
        const direction = hipToAnkle.clone().normalize();
        const normal = new THREE.Vector3(
          0,
          -direction.z,
          direction.y,
        ).normalize();
        if (normal.z > 0) normal.negate();
        const knee = hip
          .clone()
          .addScaledVector(direction, along)
          .addScaledVector(normal, bend);
        moveTube(leg.upper, hip, knee, 0.1);
        moveTube(leg.lower, knee, ankle, 0.06);
        leg.knee.position.copy(knee);
        leg.shoe.position.copy(ankle).add(new THREE.Vector3(0, -0.015, -0.055));
        leg.pedal.position.copy(ankle).add(new THREE.Vector3(0, -0.07, 0));
        moveTube(
          leg.arm,
          new THREE.Vector3(x, 0.55, 0.04),
          ankle.clone().add(new THREE.Vector3(0, -0.07, 0)),
          0.023,
        );
      });
    }
    const render = (now: number) => {
      frame = requestAnimationFrame(render);
      const dt = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
      previous = now;
      const {
        speed: currentSpeed,
        running: isRunning,
        playerCount,
        opponentSpeed,
        playerDistances,
      } = motionRef.current;
      const duel = playerCount === 2;
      const velocities = [currentSpeed, opponentSpeed].map((value) =>
        isRunning && Number.isFinite(value) ? Math.max(0, value) / 3.6 : 0,
      );
      const velocity = duel
        ? (velocities[0] + velocities[1]) / 2
        : velocities[0];
      const travel = velocity * dt;
      if (travel > 0) {
        for (const item of moving) {
          item.z += travel;
          if (item.z > 18) item.z -= 184;
          item.object.position.z = item.z;
          item.object.position.x =
            (item.stream ? waterCenter(item.z) : curve(item.z)) + item.lateral;
          item.object.updateMatrix();
        }
        for (const batch of batches) {
          batch.entries.forEach((entry, i) =>
            batch.mesh.setMatrixAt(
              i,
              matrix.multiplyMatrices(entry.source.matrix, entry.local),
            ),
          );
          batch.mesh.instanceMatrix.needsUpdate = true;
        }
      }
      players.forEach((player, index) => {
        if (index === 0 || duel)
          animateCyclist(player, velocities[index], dt, isRunning);
      });
      if (duel) {
        const distances = playerDistances ?? [
          players[0].traveled,
          players[1].traveled,
        ];
        // Preserve who is ahead while compressing large gaps so neither rider
        // leaves the shared camera. The race HUD retains the actual metres.
        const distanceLead = distances[0] - distances[1];
        const lead = Number.isFinite(distanceLead)
          ? Math.tanh(distanceLead / 10) * 3.2
          : 0;
        players.forEach((player, index) => {
          const z = 2 + (index === 0 ? -lead / 2 : lead / 2);
          player.cyclist.position.z = z;
          player.cyclist.position.x = curve(z) + (index === 0 ? -1.1 : 1.1);
        });
      }
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      changeRouteRef.current = null;
      changePlayersRef.current = null;
      const geometries = new Set<THREE.BufferGeometry>();
      const allMaterials = new Set<THREE.Material>();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          geometries.add(object.geometry);
          (Array.isArray(object.material)
            ? object.material
            : [object.material]
          ).forEach((material) => allMaterials.add(material));
        }
      });
      // Templates can include a geometry that wasn't selected by the seeded world.
      templates.forEach((template) =>
        template.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            geometries.add(object.geometry);
            allMaterials.add(object.material as THREE.Material);
          }
        }),
      );
      geometries.forEach((geometry) => geometry.dispose());
      allMaterials.forEach((material) => material.dispose());
      sun.shadow.map?.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === host)
        host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="ride-scene"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: "#dce9df",
      }}
    >
      {unavailable && (
        <div
          role="status"
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeContent: "center",
            textAlign: "center",
            padding: 30,
            color: "#385b4b",
            background: "linear-gradient(#e3eddf,#b6c78c)",
          }}
        >
          <strong>3D 騎行環境需要 WebGL</strong>
          <p>請開啟瀏覽器硬體加速，再重新載入。動作偵測與運動紀錄仍可使用。</p>
        </div>
      )}
    </div>
  );
}
