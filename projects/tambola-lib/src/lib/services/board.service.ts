import { Injectable } from '@angular/core';
import { BoardNumber } from '../models/board-number';

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  BoardData: Array<Array<BoardNumber>> = [];
  constructor() { }
  GenerateBoard(): Array<Array<BoardNumber>> {
    this.BoardData = [];
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      let row = new Array<BoardNumber>();
      for (let col = 1; col <= 10; col++) {
        let bNumber = new BoardNumber();
        bNumber.value = rowIndex * 10 + col;   
        bNumber.selected = false;
        row.push(bNumber);     
      }   
      this.BoardData.push(row);   
    }
    return this.BoardData;
  }
}