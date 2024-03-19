import Collection from './Collection';

function LibraryContents() {
  const numberOfCollections = 10; 

  const collectionKeys = Array.from({ length: numberOfCollections }, (_, index) => index);

  return (
    <div>
      {collectionKeys.map((key) => (
          <Collection key={key} />
      ))}
    </div>
  );
}

export default LibraryContents;