import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type BoxingScenePlayer = {
  guarding: boolean;
  punchId: number;
  punchSide: "left" | "right" | null;
  hitId: number;
  punchType?: "straight" | "hook" | "uppercut";
  dodge?: "left" | "right" | "duck" | null;
  dodgeId?: number;
};

export type BoxingSceneProps = {
  running: boolean;
  players: [BoxingScenePlayer, BoxingScenePlayer];
  finished?: boolean;
  resetKey?: number;
};

type Vec = [number, number, number];

/** The camera sees the ring from the side; the real people face their webcam. */
export default function BoxingScene({
  running,
  players,
  finished = false,
  resetKey = 0,
}: BoxingSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const live = useRef({ running, players, finished, resetKey });
  live.current = { running, players, finished, resetKey };
  const [unavailable, setUnavailable] = useState(false);

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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.1));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    // Flat pool shadows leave GPU time available to both pose models.
    renderer.shadowMap.enabled = false;
    renderer.domElement.setAttribute("role", "img");
    renderer.domElement.setAttribute(
      "aria-label",
      "3D 雙人拳擊比賽：綠色與藍色長者面對面，以直拳、勾拳、上鉤拳攻擊，交叉防守、左右側傾與微蹲閃避",
    );
    renderer.domElement.dataset.engine = "boxing-ring";
    renderer.domElement.dataset.facing = "opponents";
    renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#263a37");
    scene.fog = new THREE.Fog("#263a37", 13, 28);
    const camera = new THREE.OrthographicCamera(-5, 5, 3, -3, 0.1, 60);
    camera.position.set(0.22, 4.3, 9);
    camera.lookAt(0, 1.05, 0);
    scene.add(new THREE.HemisphereLight("#f8f3dc", "#334440", 2.5));
    const key = new THREE.DirectionalLight("#fff3d6", 3.1);
    key.position.set(-3, 7, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight("#bfdbe3", 2.0);
    rim.position.set(4, 6, -4);
    scene.add(rim);

    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    const textures = new Set<THREE.Texture>();
    const geometry = <T extends THREE.BufferGeometry>(value: T): T => {
      geometries.add(value);
      return value;
    };
    const material = (color: string, roughness = 0.9) => {
      const value = new THREE.MeshStandardMaterial({
        color,
        roughness,
        flatShading: true,
      });
      materials.add(value);
      return value;
    };
    const sphereGeometry = geometry(new THREE.IcosahedronGeometry(1, 1));
    const cylinderGeometry = geometry(new THREE.CylinderGeometry(1, 1, 1, 8));
    const boxGeometry = geometry(new THREE.BoxGeometry(1, 1, 1));
    const floorGeometry = geometry(new THREE.PlaneGeometry(1, 1));
    const up = new THREE.Vector3(0, 1, 0);
    const delta = new THREE.Vector3();
    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    const box = (
      parent: THREE.Object3D,
      position: Vec,
      scale: Vec,
      surface: THREE.Material,
    ) => {
      const mesh = new THREE.Mesh(boxGeometry, surface);
      mesh.position.set(...position);
      mesh.scale.set(...scale);
      parent.add(mesh);
      return mesh;
    };
    const ball = (
      parent: THREE.Object3D,
      position: Vec,
      scale: Vec,
      surface: THREE.Material,
    ) => {
      const mesh = new THREE.Mesh(sphereGeometry, surface);
      mesh.position.set(...position);
      mesh.scale.set(...scale);
      parent.add(mesh);
      return mesh;
    };
    const moveTube = (mesh: THREE.Mesh, from: Vec, to: Vec, radius: number) => {
      a.set(...from);
      b.set(...to);
      delta.copy(b).sub(a);
      mesh.position.copy(a).add(b).multiplyScalar(0.5);
      mesh.scale.set(radius, Math.max(0.001, delta.length()), radius);
      mesh.quaternion.setFromUnitVectors(up, delta.normalize());
    };
    const tube = (
      parent: THREE.Object3D,
      from: Vec,
      to: Vec,
      radius: number,
      surface: THREE.Material,
    ) => {
      const mesh = new THREE.Mesh(cylinderGeometry, surface);
      moveTube(mesh, from, to, radius);
      parent.add(mesh);
      return mesh;
    };
    const ground = material("#344843");
    const apron = material("#4d6c60");
    const ringMat = material("#e1dfc7");
    const cream = material("#f6efd9");
    const gold = material("#c1a86d", 0.55);
    const green = material("#6f9c7c");
    const blue = material("#7099b5");
    const charcoal = material("#2c413d");
    box(scene, [0, -0.08, 0], [36, 0.12, 30], ground);
    box(scene, [0, 0.13, 0], [8.4, 0.4, 6.5], apron);
    box(scene, [0, 0.345, 0], [8.35, 0.055, 6.45], ringMat);
    box(scene, [0, 0.14, 3.26], [8.4, 0.22, 0.025], gold);
    // A fixed logo and border make the competition setting readable at a glance.
    const logoCanvas = document.createElement("canvas");
    logoCanvas.width = 1024;
    logoCanvas.height = 512;
    const logoContext = logoCanvas.getContext("2d");
    if (logoContext) {
      logoContext.strokeStyle = "#7e9b7a";
      logoContext.lineWidth = 9;
      logoContext.beginPath();
      logoContext.ellipse(512, 250, 290, 190, 0, 0, Math.PI * 2);
      logoContext.stroke();
      logoContext.strokeStyle = "#bca66f";
      logoContext.lineWidth = 3;
      logoContext.beginPath();
      logoContext.ellipse(512, 250, 270, 173, 0, 0, Math.PI * 2);
      logoContext.stroke();
      logoContext.fillStyle = "#5e7a65";
      logoContext.textAlign = "center";
      logoContext.font = "bold 70px sans-serif";
      logoContext.fillText("友善拳擊賽", 512, 255);
      logoContext.font = "28px sans-serif";
      logoContext.fillText("PLAYER 1    ×    PLAYER 2", 512, 310);
      const texture = new THREE.CanvasTexture(logoCanvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      textures.add(texture);
      const surface = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
      });
      materials.add(surface);
      const logo = new THREE.Mesh(floorGeometry, surface);
      logo.rotation.x = -Math.PI / 2;
      logo.position.set(0, 0.378, 0);
      logo.scale.set(5.6, 3.5, 1);
      scene.add(logo);
    }
    for (const z of [-2.85, 2.85]) {
      for (const x of [-3.8, 3.8]) {
        const pad = x < 0 ? green : blue;
        tube(scene, [x, 0.38, z], [x, 2.28, z], 0.095, charcoal);
        box(scene, [x, 1.55, z], [0.27, 1.4, 0.24], pad);
        ball(scene, [x, 2.27, z], [0.12, 0.09, 0.12], gold);
      }
    }
    const frontRope = new THREE.MeshStandardMaterial({
      color: "#faf4df",
      transparent: true,
      opacity: 0.32,
      roughness: 1,
      depthWrite: false,
    });
    materials.add(frontRope);
    for (const y of [0.92, 1.42, 1.92]) {
      tube(scene, [-3.8, y, -2.85], [3.8, y, -2.85], 0.035, cream);
      tube(scene, [-3.8, y, 2.85], [3.8, y, 2.85], 0.028, frontRope);
      tube(scene, [-3.8, y, -2.85], [-3.8, y, 2.85], 0.035, green);
      tube(scene, [3.8, y, -2.85], [3.8, y, 2.85], 0.035, blue);
    }
    // Steps and discreet floor lights complete the ring, without scenery clutter.
    for (let step = 0; step < 3; step++)
      box(
        scene,
        [4.45 + step * 0.22, 0.24 - step * 0.08, 1.8],
        [0.48, 0.16, 1.1],
        apron,
      );
    for (const x of [-5.6, 5.6]) {
      box(scene, [x, 3.0, -6.0], [0.16, 5.8, 0.16], charcoal);
      box(scene, [x, 5.85, -4.3], [1.3, 0.18, 2.7], charcoal);
      for (const z of [-5.1, -3.7])
        ball(scene, [x, 5.7, z], [0.22, 0.1, 0.25], cream);
    }
    // Audience heads/bodies are two instanced batches rather than many draws.
    const audienceCount = 58;
    const audienceBodies = new THREE.InstancedMesh(
      sphereGeometry,
      material("#668077"),
      audienceCount,
    );
    const audienceHeads = new THREE.InstancedMesh(
      sphereGeometry,
      material("#c9ba9c"),
      audienceCount,
    );
    const dummy = new THREE.Object3D();
    for (let index = 0; index < audienceCount; index++) {
      const row = Math.floor(index / 20);
      const column = index % 20;
      const x = (column - 9.5) * 0.72;
      const z = -5.5 - row * 0.85;
      const y = 0.75 + row * 0.45;
      dummy.position.set(x, y, z);
      dummy.scale.set(0.21, 0.35, 0.19);
      dummy.updateMatrix();
      audienceBodies.setMatrixAt(index, dummy.matrix);
      dummy.position.y += 0.43;
      dummy.scale.setScalar(0.14);
      dummy.updateMatrix();
      audienceHeads.setMatrixAt(index, dummy.matrix);
    }
    scene.add(audienceBodies, audienceHeads);
    for (let row = 0; row < 3; row++)
      box(
        scene,
        [0, 0.1 + row * 0.42, -5.5 - row * 0.85],
        [15, 0.25, 0.75],
        charcoal,
      );

    const shadowSurface = new THREE.MeshBasicMaterial({
      color: "#39483e",
      opacity: 0.16,
      transparent: true,
      depthWrite: false,
    });
    materials.add(shadowSurface);
    const shadowGeometry = geometry(new THREE.CircleGeometry(1, 24));
    function fighter(index: 0 | 1) {
      const root = new THREE.Group();
      root.name = index === 0 ? "P1-GreenBoxer" : "P2-BlueBoxer";
      root.position.set(index === 0 ? -0.74 : 0.74, 0.38, 0);
      root.rotation.y = index === 0 ? Math.PI / 2 : -Math.PI / 2;
      scene.add(root);
      const body = new THREE.Group();
      root.add(body);
      const jersey = material(index === 0 ? "#568e7b" : "#4a83c2");
      const lightJersey = material(index === 0 ? "#82b09b" : "#8eb5db");
      const gloveSurface = material(index === 0 ? "#7ca568" : "#6c99c3", 0.65);
      const skin = material("#dfb58f");
      const hair = material("#e1dfd1");
      const shoes = material("#efe5cb");
      const shorts = material("#3b5148");
      ball(body, [0, 1.15, 0], [0.28, 0.19, 0.2], shorts);
      ball(body, [0, 1.55, 0], [0.31, 0.39, 0.22], jersey);
      ball(body, [0, 1.78, 0], [0.32, 0.12, 0.21], lightJersey);
      box(body, [0, 1.5, 0.213], [0.42, 0.04, 0.012], cream);
      tube(body, [0, 1.87, 0], [0, 2.03, 0], 0.09, skin);
      const head = new THREE.Group();
      head.position.set(0, 2.17, 0);
      body.add(head);
      ball(head, [0, 0, 0], [0.21, 0.24, 0.195], skin);
      ball(head, [0, 0.075, -0.04], [0.216, 0.195, 0.178], hair);
      ball(head, [0, -0.025, 0.19], [0.045, 0.05, 0.06], skin);
      for (const side of [-1, 1]) {
        ball(head, [side * 0.207, -0.012, 0], [0.035, 0.06, 0.04], skin);
        ball(
          head,
          [side * 0.078, 0.012, 0.174],
          [0.013, 0.018, 0.012],
          charcoal,
        );
      }
      // Keep the shoes planted while the upper body dips and the knees bend.
      const legs = [-1, 1].map((side) => ({
        side,
        upper: tube(
          root,
          [side * 0.16, 1.13, -side * 0.075],
          [side * 0.18, 0.64, side * 0.07],
          0.1,
          shorts,
        ),
        lower: tube(
          root,
          [side * 0.18, 0.64, side * 0.07],
          [side * 0.2, 0.14, side * 0.16],
          0.065,
          skin,
        ),
        knee: ball(
          root,
          [side * 0.18, 0.64, side * 0.07],
          [0.075, 0.075, 0.075],
          skin,
        ),
        shoe: ball(
          root,
          [side * 0.2, 0.09, side * 0.16 + 0.055],
          [0.105, 0.085, 0.18],
          shoes,
        ),
      }));
      const arms = [-1, 1].map((side) => {
        const glove = new THREE.Group();
        ball(glove, [0, 0, 0.025], [0.14, 0.145, 0.18], gloveSurface);
        ball(
          glove,
          [-side * 0.085, -0.04, 0.005],
          [0.07, 0.08, 0.09],
          gloveSurface,
        );
        box(glove, [0, -0.09, -0.03], [0.19, 0.09, 0.13], cream);
        body.add(glove);
        return {
          side,
          upper: tube(body, [0, 0, 0], [0, 1, 0], 0.085, jersey),
          lower: tube(body, [0, 0, 0], [0, 1, 0], 0.06, skin),
          elbow: ball(body, [0, 0, 0], [0.065, 0.065, 0.065], skin),
          glove,
        };
      });
      const shadow = new THREE.Mesh(shadowGeometry, shadowSurface);
      shadow.position.set(root.position.x, 0.379, 0.02);
      shadow.rotation.x = -Math.PI / 2;
      shadow.scale.set(0.48, 0.38, 1);
      scene.add(shadow);
      const shieldMaterial = new THREE.MeshBasicMaterial({
        color: index === 0 ? "#b7d599" : "#a6cfe4",
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      materials.add(shieldMaterial);
      const shield = new THREE.Mesh(
        geometry(new THREE.RingGeometry(0.47, 0.49, 32)),
        shieldMaterial,
      );
      shield.position.set(0, 1.55, 0.44);
      root.add(shield);
      return {
        root,
        body,
        head,
        arms,
        legs,
        shadow,
        shield,
        shieldMaterial,
        jersey,
        baseX: root.position.x,
        lastPunch: live.current.players[index].punchId,
        lastHit: live.current.players[index].hitId,
        lastDodge: live.current.players[index].dodgeId ?? 0,
        punchSide: "left" as "left" | "right",
        punchType: "straight" as "straight" | "hook" | "uppercut",
        punchTime: Infinity,
        hitTime: Infinity,
        dodgeTime: Infinity,
        dodgeX: 0,
        duck: 0,
        guard: 0,
      };
    }
    const fighters = [fighter(0), fighter(1)];
    function poseFighter(model: (typeof fighters)[number], clock: number) {
      const punchDuration = model.punchType === "straight" ? 0.46 : 0.58;
      const punchPhase = Math.min(1, model.punchTime / punchDuration);
      const punch =
        Number.isFinite(model.punchTime) && model.punchTime < punchDuration
          ? Math.pow(Math.sin(Math.PI * punchPhase), 1.35)
          : 0;
      const recoil =
        Number.isFinite(model.hitTime) && model.hitTime < 0.32
          ? Math.sin((model.hitTime / 0.32) * Math.PI)
          : 0;
      const evade =
        Number.isFinite(model.dodgeTime) && model.dodgeTime < 0.35
          ? Math.sin((model.dodgeTime / 0.35) * Math.PI)
          : 0;
      const direction = model.baseX < 0 ? 1 : -1;
      model.root.position.x =
        model.baseX + direction * (punch * 0.14 - recoil * 0.045);
      model.shadow.position.x = model.root.position.x;
      model.body.position.y = Math.sin(clock * 2.3) * 0.007 - model.duck * 0.18;
      // The fighters face along world X. A local-X translation would disappear
      // into depth, so lean around local X for a readable screen-left/right slip.
      model.body.rotation.x =
        punch * 0.035 - recoil * 0.045 + model.dodgeX * direction * 0.14;
      model.body.rotation.y =
        model.punchType === "hook"
          ? (model.punchSide === "left" ? -1 : 1) * punch * 0.14
          : 0;
      model.head.rotation.x = -recoil * 0.05;
      model.jersey.emissive.setHex(
        recoil > 0 ? 0x6c5437 : evade > 0 ? 0x315e55 : 0x000000,
      );
      model.jersey.emissiveIntensity = recoil * 0.16 + evade * 0.1;
      model.shieldMaterial.opacity = model.guard * 0.55;
      model.shield.visible = model.guard > 0.02;
      model.shield.position.y = 1.55 - model.duck * 0.18;
      model.shield.position.z = 0.44 + model.dodgeX * direction * 0.21;
      model.shield.rotation.x = model.body.rotation.x;
      for (const leg of model.legs) {
        const hip = new THREE.Vector3(leg.side * 0.16, 1.13, -leg.side * 0.075)
          .applyEuler(model.body.rotation)
          .add(model.body.position);
        const knee: Vec = [
          leg.side * 0.18,
          0.64 - model.duck * 0.045,
          leg.side * 0.07 + model.duck * 0.15 + model.dodgeX * direction * 0.05,
        ];
        moveTube(leg.upper, [hip.x, hip.y, hip.z], knee, 0.1);
        moveTube(
          leg.lower,
          knee,
          [leg.side * 0.2, 0.14, leg.side * 0.16],
          0.065,
        );
        leg.knee.position.set(...knee);
      }
      for (const arm of model.arms) {
        const active = (model.punchSide === "left" ? -1 : 1) === arm.side;
        const reach = active ? punch * (1 - model.guard) : 0;
        const neutralHand: Vec = [arm.side * 0.24, 1.52, 0.39];
        // Crossed forearms form an X across the chest rather than a face guard.
        const guardHand: Vec = [
          -arm.side * 0.18,
          1.68,
          0.32 + (arm.side > 0 ? 0.04 : 0),
        ];
        const hand: Vec = [
          THREE.MathUtils.lerp(neutralHand[0], guardHand[0], model.guard) *
            (1 - reach * 0.78),
          THREE.MathUtils.lerp(neutralHand[1], guardHand[1], model.guard) +
            reach * 0.16,
          THREE.MathUtils.lerp(neutralHand[2], guardHand[2], model.guard) +
            reach * 0.54,
        ];
        const elbow: Vec = [
          arm.side * (0.34 - reach * 0.12),
          1.36 + model.guard * 0.05 + reach * 0.29,
          0.14 + reach * 0.36,
        ];
        if (reach > 0 && model.punchType === "hook") {
          // A bent elbow sweeps around the opponent instead of a straight jab.
          const arc = Math.sin(Math.PI * punchPhase * 2) * reach;
          hand[0] = arm.side * (0.24 * (1 - reach * 0.9) + arc * 0.18);
          hand[1] += reach * 0.05;
          hand[2] =
            THREE.MathUtils.lerp(neutralHand[2], guardHand[2], model.guard) +
            reach * 0.51;
          elbow[0] = arm.side * (0.34 + reach * 0.18);
          elbow[1] = 1.36 + model.guard * 0.05 + reach * 0.25;
          elbow[2] = 0.14 + reach * 0.23;
        } else if (reach > 0 && model.punchType === "uppercut") {
          const windup =
            Number.isFinite(model.punchTime) && punchPhase < 0.3
              ? Math.sin((Math.PI * punchPhase) / 0.3)
              : 0;
          // The glove first dips, then rises toward the chest; it stays below
          // the head-top bound already reserved by the responsive camera.
          hand[0] = arm.side * 0.24 * (1 - reach * 0.84);
          hand[1] =
            THREE.MathUtils.lerp(neutralHand[1], guardHand[1], model.guard) +
            reach * 0.38 -
            windup * 0.18 * (1 - model.guard);
          hand[2] =
            THREE.MathUtils.lerp(neutralHand[2], guardHand[2], model.guard) +
            reach * 0.52;
          elbow[0] = arm.side * (0.34 - reach * 0.15);
          elbow[1] = 1.36 + model.guard * 0.05 + reach * 0.14 - windup * 0.04;
          elbow[2] = 0.14 + reach * 0.31;
        }
        moveTube(arm.upper, [arm.side * 0.27, 1.78, 0], elbow, 0.085);
        moveTube(arm.lower, elbow, hand, 0.06);
        arm.elbow.position.set(...elbow);
        arm.glove.position.set(...hand);
        arm.glove.rotation.x =
          model.guard * -0.12 +
          (active && model.punchType === "uppercut" ? -reach * 0.7 : 0);
        arm.glove.rotation.z =
          arm.side *
          (model.guard * 0.55 +
            (active && model.punchType === "hook" ? reach * 0.45 : 0));
      }
    }
    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(1, host.clientHeight);
      const aspect = width / height;
      const stage = host.parentElement;
      const bounds = host.getBoundingClientRect();
      const localBottom = (selector: string) => {
        const rect = stage?.querySelector(selector)?.getBoundingClientRect();
        return rect ? rect.bottom - bounds.top : 0;
      };
      // The score cards are part of the arena rather than the Three scene.
      // Fit both people into the space between that HUD and the controls,
      // including the taller stacked cards/camera on a narrow screen.
      const topHud =
        width <= 1050
          ? Math.max(
              localBottom(".boxing-scoreboard"),
              localBottom(".boxing-camera"),
              width <= 700 ? localBottom(".boxing-announcer") : 0,
            )
          : localBottom(".boxing-scoreboard");
      const top = Math.min(height * 0.58, Math.max(24, topHud + 16));
      const controls = stage
        ?.querySelector(".boxing-action-panels")
        ?.getBoundingClientRect();
      const bottom = Math.max(
        top + height * 0.18,
        Math.min(
          height - 70,
          controls ? controls.top - bounds.top - 18 : height - 175,
        ),
      );
      camera.updateMatrixWorld();
      const headPoints = [-0.74, 0.74].map(
        (x) => new THREE.Vector3(x, 2.81, 0),
      );
      const footPoints = [-0.74, 0.74].map(
        (x) => new THREE.Vector3(x, 0.38, 0.18),
      );
      const headY = Math.max(
        ...headPoints.map(
          (point) => point.clone().applyMatrix4(camera.matrixWorldInverse).y,
        ),
      );
      const footY = Math.min(
        ...footPoints.map(
          (point) => point.clone().applyMatrix4(camera.matrixWorldInverse).y,
        ),
      );
      const viewHeight = Math.max(
        4.8,
        4.5 / aspect,
        ((headY - footY) * height * 1.04) / Math.max(1, bottom - top),
      );
      const centerY = headY + viewHeight * (top / height - 0.5);
      camera.left = (-viewHeight * aspect) / 2;
      camera.right = (viewHeight * aspect) / 2;
      camera.top = centerY + viewHeight / 2;
      camera.bottom = centerY - viewHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      const screenY = (point: THREE.Vector3) =>
        (((1 - point.project(camera).y) * height) / 2).toFixed(1);
      renderer.domElement.dataset.headScreenY = headPoints
        .map(screenY)
        .join(",");
      renderer.domElement.dataset.footScreenY = footPoints
        .map(screenY)
        .join(",");
      renderer.domElement.dataset.actorSafeTop = top.toFixed(1);
      renderer.domElement.dataset.actorSafeBottom = bottom.toFixed(1);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    let frame = 0;
    let previous = 0;
    let clock = 0;
    let currentResetKey = live.current.resetKey;
    const render = (now: number) => {
      frame = requestAnimationFrame(render);
      if (previous && now - previous < 1000 / 30) return;
      const dt = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
      previous = now;
      const current = live.current;
      const active = current.running && !current.finished;
      if (current.resetKey !== currentResetKey) {
        currentResetKey = current.resetKey;
        resize();
        clock = 0;
        fighters.forEach((model, index) => {
          model.guard = 0;
          model.punchTime = Infinity;
          model.hitTime = Infinity;
          model.dodgeTime = Infinity;
          model.dodgeX = 0;
          model.duck = 0;
          model.punchType = "straight";
          model.lastPunch = current.players[index].punchId;
          model.lastHit = current.players[index].hitId;
          model.lastDodge = current.players[index].dodgeId ?? 0;
        });
      }
      if (active) clock += dt;
      fighters.forEach((model, index) => {
        const player = current.players[index];
        if (player.punchId !== model.lastPunch) {
          const reset = player.punchId < model.lastPunch;
          model.lastPunch = player.punchId;
          model.punchTime = !reset && active && player.punchSide ? 0 : Infinity;
          if (player.punchSide) model.punchSide = player.punchSide;
          if (!reset && active)
            model.punchType = player.punchType ?? "straight";
          if (reset) model.guard = 0;
        }
        if (player.hitId !== model.lastHit) {
          const reset = player.hitId < model.lastHit;
          model.lastHit = player.hitId;
          model.hitTime = !reset && active ? 0 : Infinity;
        }
        const dodgeId = player.dodgeId ?? 0;
        if (dodgeId !== model.lastDodge) {
          const reset = dodgeId < model.lastDodge;
          model.lastDodge = dodgeId;
          model.dodgeTime = !reset && active ? 0 : Infinity;
        }
        if (active) {
          model.punchTime += dt;
          model.hitTime += dt;
          model.dodgeTime += dt;
          const slip =
            player.dodge === "left" ? -1 : player.dodge === "right" ? 1 : 0;
          model.dodgeX = THREE.MathUtils.damp(model.dodgeX, slip, 16, dt);
          model.duck = THREE.MathUtils.damp(
            model.duck,
            player.dodge === "duck" ? 1 : 0,
            16,
            dt,
          );
          model.guard = THREE.MathUtils.damp(
            model.guard,
            player.guarding ? 1 : 0,
            18,
            dt,
          );
        }
        poseFighter(model, clock);
      });
      renderer.domElement.dataset.punchIds = fighters
        .map((model) => model.lastPunch)
        .join(",");
      renderer.domElement.dataset.hitIds = fighters
        .map((model) => model.lastHit)
        .join(",");
      renderer.domElement.dataset.punchTypes = fighters
        .map((model) => model.punchType)
        .join(",");
      renderer.domElement.dataset.dodgeIds = fighters
        .map((model) => model.lastDodge)
        .join(",");
      renderer.domElement.dataset.dodgeState = fighters
        .map((model) =>
          model.duck > 0.15
            ? "duck"
            : model.dodgeX < -0.15
              ? "left"
              : model.dodgeX > 0.15
                ? "right"
                : "none",
        )
        .join(",");
      renderer.domElement.dataset.guards = fighters
        .map((model) => String(model.guard > 0.5))
        .join(",");
      renderer.domElement.dataset.running = String(active);
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      geometries.forEach((value) => value.dispose());
      materials.forEach((value) => value.dispose());
      textures.forEach((value) => value.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === host)
        host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="boxing-scene"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: "#263a37",
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
            padding: 24,
            textAlign: "center",
            color: "#f0f1df",
          }}
        >
          <strong>拳擊擂台需要 WebGL</strong>
          <p>請開啟瀏覽器硬體加速，再重新載入。</p>
        </div>
      )}
    </div>
  );
}
