import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
  isFormVisible = false;
  formData = {
    title: '',
    content: ''
  };

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
  submitForm(){
    console.log(this.formData);
  }
}
