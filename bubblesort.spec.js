

describe('Bubble Sort', function(){
    // beforeAll(function () {
    //     spyOn(bubbleSort, 'swap').and.callThrough(); 
    //   });
    //   it('how many swaps', function () {
    //     bubbleSort();
    //     expect(bubbleSort.swap.calls.count()).toEqual(2);
    //   });
    
    const testArray = [4, 4, 1, 3, 7, 6, 10];
    it('sorts numerically', function(){
      expect( bubbleSort(testArray) ).toEqual( [ 1, 3, 4, 4, 7, 6, 10 ] );
    });
  });