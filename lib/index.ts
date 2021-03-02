import { RdfObjectLoader } from 'rdf-object';
import { namedNode, quad } from '@rdfjs/data-model';

(async () => {
  const loader = new RdfObjectLoader();
  await loader.importArray([
    quad(namedNode('thing'), namedNode('a'), namedNode('thing'))
  ]);
  const thing = loader.resources['thing'];

  console.log(thing.toQuads());
})
