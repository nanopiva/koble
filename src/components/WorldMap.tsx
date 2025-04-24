import Image from "next/image";
import styles from "../styles/WorldMap.module.css";
import mapWorld from "../../public/world.svg";

const WorldMap = () => {
  return (
    <div className={styles.mapContainer}>
      {/* Imagen del mapa */}
      <Image
        src={mapWorld || "/placeholder.svg"}
        alt="Mapa del mundo"
        width={1000}
        height={500}
        className={styles.mapImage}
      />

      {/* Líneas de conexión */}
      <svg className={styles.overlay} viewBox="0 0 1000 500">
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#00b4d8" />
          </marker>
        </defs>

        {/* Punto en Santa Fe */}
        <circle
          cx="305"
          cy="460"
          r="6"
          fill="#00b4d8"
          className={styles.pulse}
        />
        <text
          x="270"
          y="500"
          fill="#00b4d8"
          fontSize="25"
          fontFamily="Arial"
          fontWeight="bold"
        >
          Santa Fe
        </text>

        {/* Conexión a Norte América (EEUU) - Curva suave hacia el noroeste */}
        <path
          d="M305,460 Q230,320 150,170"
          stroke="#00b4d8"
          strokeWidth="2"
          className={styles.connection}
        />

        {/* Conexión a Europa - Curva suave hacia el noreste */}
        <path
          d="M305,460 Q420,300 540,200"
          stroke="#00b4d8"
          strokeWidth="2"
          className={styles.connection}
        />

        {/* Conexión a África - Curva suave hacia el este */}
        <path
          d="M305,460 Q430,400 550,350"
          stroke="#00b4d8"
          strokeWidth="2"
          className={styles.connection}
        />

        {/* Conexión a Medio Oriente - Curva suave hacia el noreste */}
        <path
          d="M305,460 Q440,330 580,270"
          stroke="#00b4d8"
          strokeWidth="2"
          className={styles.connection}
        />

        {/* Conexión a Asia (Rusia) - Curva suave hacia el noreste */}
        <path
          d="M305,460 Q550,320 720,240"
          stroke="#00b4d8"
          strokeWidth="2"
          className={styles.connection}
        />

        {/* Conexión a Asia Oriental - Curva suave hacia el este */}
        <path
          d="M305,460 Q530,400 790,290"
          stroke="#00b4d8"
          strokeWidth="2"
          className={styles.connection}
        />

        {/* Conexión a Oceanía - Curva suave hacia el sureste */}
        <path
          d="M305,460 Q570,480 840,450"
          stroke="#00b4d8"
          strokeWidth="2"
          className={styles.connection}
        />

        {/* Conexión a Sudamérica (otras regiones) - Curva muy suave hacia el sur */}
        <path
          d="M305,460 Q295,420 280,380"
          stroke="#00b4d8"
          strokeWidth="2"
          className={styles.connection}
        />

        {/* Conexión a Centro américa/Mexico - Curva suave hacia el noroeste */}
        <path
          d="M305,460 Q240,380 180,280"
          stroke="#00b4d8"
          strokeWidth="2"
          className={styles.connection}
        />
      </svg>
    </div>
  );
};

export default WorldMap;
