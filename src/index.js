class Sorter {
  constructor(sorter) {
      this.sorter = [];
      this.compFunction = (left, right) => left - right;
  }

  add(element) {
      this.sorter.push(element);
  }

  at(index) {
      return this.sorter[index];
  }

  get length() {
      return this.sorter.length;
  }

  toArray() {
      return this.sorter.slice();
  }

  sort(indices) {
      indices.sort();
      var n = indices.length;
      for(var i = 0; i < n; i++)
      {
          for(var j = 0; j < n - 1; j++)
          {
              var i1 = indices[j];
              var j1 = indices[j + 1];
              if(this.compFunction(this.sorter[i1], this.sorter[j1]) > 0)
              {
                  [this.sorter[i1], this.sorter[j1]] = [this.sorter[j1], this.sorter[i1]];
                  //var t = this.sorter[i1];
                  //this.sorter[i1] = this.sorter[j1];
                  //this.sorter[j1] = t;
              }

          }
      }
  }

  setComparator(compareFunction) {
      this.compFunction = compareFunction;
  }
}

module.exports = Sorter;