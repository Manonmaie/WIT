import { NgModule } from '@angular/core';
import { TambolaLibComponent } from './tambola-lib.component';
import { BoardComponent } from './components/board/board.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { GamesComponent } from './components/games/games.component';
import { PlayersComponent } from './components/players/players.component';
import { WinnersComponent } from './components/winners/winners.component';



@NgModule({
  declarations: [TambolaLibComponent, BoardComponent, NumbersComponent, GamesComponent, PlayersComponent, WinnersComponent],
  imports: [
  ],
  exports: [TambolaLibComponent]
})
export class TambolaLibModule { }
