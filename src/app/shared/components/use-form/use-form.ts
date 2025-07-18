import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../core/models/userInterface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-use-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './use-form.html',
  styleUrl: './use-form.css',
})
export class UseForm {
  @Input() currentUser!: User;
  @Input() isEdit!: boolean;

  @Output() reset = new EventEmitter<void>();
  @Output() save = new EventEmitter<User>();

  onSubmit(event:Event) {
    event.preventDefault();
    this.save.emit(this.currentUser);
  }

  onClear() {
    this.reset.emit();
  }
}
