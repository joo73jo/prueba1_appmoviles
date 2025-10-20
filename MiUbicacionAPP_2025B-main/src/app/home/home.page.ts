import { Component } from '@angular/core';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader,
  IonCardTitle, IonContent, IonHeader, IonInput, IonItem,
  IonLabel, IonSelect, IonSelectOption, IonTitle, IonToolbar,
  IonList, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var ImageCapture: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonItem, IonLabel, IonInput,
    IonSelect, IonSelectOption, IonList,
    IonGrid, IonRow, IonCol,
    
    NgIf, NgFor, FormsModule
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  descripcion: string = '';
  monto: string = '';
  pagador: string = '';
  fotoData: string | null = null;
  gastos: any[] = [];

  async tomarFoto() {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      const track = mediaStream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);
      const blob = await imageCapture.takePhoto();
      track.stop();

      const reader = new FileReader();
      reader.onloadend = () => (this.fotoData = reader.result as string);
      reader.readAsDataURL(blob);
    } catch (e) {
      // Si no hay cámara, usa una imagen simulada
      const response = await fetch('https://ionicframework.com/docs/img/demos/card-media.png');
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => (this.fotoData = reader.result as string);
      reader.readAsDataURL(blob);
    }
  }

  guardarGasto() {
    if (!this.descripcion || !this.monto || !this.pagador || !this.fotoData) {
      alert('Completa todos los campos y toma la foto del recibo.');
      return;
    }

    const nuevo = {
      descripcion: this.descripcion,
      monto: this.monto,
      pagador: this.pagador,
      foto: this.fotoData,
      fecha: new Date().toLocaleString()
    };

    this.gastos.unshift(nuevo);

    const linea = `${nuevo.fecha} | ${nuevo.descripcion} | $${nuevo.monto} | Pagado por: ${nuevo.pagador}\n`;
    const blob = new Blob([linea], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'recibos_gastos.txt';
    link.click();

    this.descripcion = '';
    this.monto = '';
    this.pagador = '';
    this.fotoData = null;

    alert('Gasto guardado con recibo.');
  }
}
