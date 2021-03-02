import { RdfObjectLoader } from 'rdf-object';
import { namedNode, quad } from '@rdfjs/data-model';

// Self referential
(async () => {
  const loader = new RdfObjectLoader();
  await loader.importArray([
    quad(namedNode('thing'), namedNode('a'), namedNode('thing'))
  ]);
  const thing = loader.resources['thing'];

  console.log(thing.toQuads());
})();

// Circular reference
(async () => {
  const loader = new RdfObjectLoader();
  await loader.importArray([
    quad(namedNode('jesse'), namedNode('knows'), namedNode('bob')),
    quad(namedNode('bob'), namedNode('knows'), namedNode('jesse')),
  ]);
  const thing = loader.resources['thing'];

  console.log(thing.toQuads());
})();
