import fs from 'fs';

//separate vectors
function separateVectors(data) {
  const separated = [];
  
  if (!data.vectors || !Array.isArray(data.vectors)) {
    console.warn('No vectors array found in data');
    return separated;
  }

  for (const vector of data.vectors) {
    if (vector.text && vector.vector) {
      separated.push({
        id: vector.id || 'unknown',
        text: vector.text,
        embedding: vector.vector,
        created: vector.created,
        count: vector.count
      });
    }
  }

  return separated;
}

export function saveFile(
  inputPath = './vectors/gai/gai-section-vectors.json',
  outputDir = './vectors/gai/individual'
) {
  try {
    const raw = fs.readFileSync(inputPath, 'utf-8');
    const data = JSON.parse(raw);
    
    // make new output directory if none rn
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const flattened = separateVectors(data);
    
    // handling duplicates, track file name
    const usedFilenames = new Set();
    // save as json
    for (let i = 0; i < flattened.length; i++) {
      const vector = flattened[i];
      let baseId = vector.id || `vector_${i}`;
      let filename = `${baseId}.json`;
      
      // if there is a duplicate, add counter at end of file name 
      let counter = 1;
      while (usedFilenames.has(filename)) {
        filename = `${baseId}_${counter}.json`;
        counter++;
      }
      
      usedFilenames.add(filename);
      const filepath = `${outputDir}/${filename}`;
      
      fs.writeFileSync(filepath, JSON.stringify(vector, null, 2), 'utf-8');
    }
    
    console.log(`Successfully saved ${flattened.length} individual vector files to ${outputDir}`);
  } catch(err) {
    console.error(err.message);
  }
}

saveFile('./vectors/gai/gai-section-vectors.json', './vectors/gai/individual');