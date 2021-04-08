// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  const pAequorFactory = (specimenNum, dna) => {
    return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let randIndex = [Math.floor(Math.random() * this.dna.length)];
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase()
      }
      this.dna[randIndex] = newBase;
      console.log(`I replaced ${randIndex} with ${newBase}`);
      return this.dna;
    },
    compareDNA(obj) {
      let dupeNumb = 0;
      for(i = 0; i < this.dna.length; i++){
        if(this.dna[i] == obj.dna[i]){
          dupeNumb++
        }
      }
      let final = (dupeNumb / 15) * 100;
      return `The specimens have ${final.toFixed(0)}% DNA in common`
    },
    willLikelySurvive() {
      let survivalNum = 0;
      for(i = 0; i < this.dna.length; i++){
        if(this.dna[i] == 'C'){
          survivalNum++
    } else if (this.dna[i] == 'G'){
      survivalNum++
    }
    }
    if(survivalNum >= 9){
      return true
    } else {
      return false
    }
  }
  }
  }
  let sample = [];
  let id = 1;
  while (sample.length < 30) {
    let temp = pAequorFactory(id, mockUpStrand());
    if (temp.willLikelySurvive() == true) {
      sample.push(`Specimen ${id} = ${temp.dna}`);
      id ++
    }
  }
  
  let x = pAequorFactory(1, mockUpStrand());
  let y = pAequorFactory(2, mockUpStrand());
  console.log(x.dna);
  console.log(y.dna);
  console.log(x.compareDNA(y));
  console.log(x.willLikelySurvive());
  console.log(sample)
  