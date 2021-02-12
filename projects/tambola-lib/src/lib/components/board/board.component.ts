import { Component, Input, OnInit } from '@angular/core';
import {BoardService} from '../../services/board.service';
import {BoardNumber} from '../../models/board-number';

@Component({
  selector: 'rm-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() BoardData: Array<Array<BoardNumber>> = [];
  @Input() CurrentNumber: number;

  constructor(private boardSevice: BoardService) { 
    this.BoardData = this.boardSevice.GenerateBoard();
  }

  ngOnInit(): void {
  }

}
