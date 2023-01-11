function Peli({id, urlImg, urlPeli, sinopsis, urlPoster, titulo}) {
  return (
    <li key={id}>
      <img src={urlImg + urlPoster} />
      {titulo}
      <div className="InfoPeli">
        <p>
          <a href={urlPeli}>Watch now</a> {sinopsis}
        </p>
      </div>
    </li>
  );
}

export default Peli;
