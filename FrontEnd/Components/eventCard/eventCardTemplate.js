import { html, css } from 'lit';
import { InputImage } from '../input-image/input-image';
import {CountdownTimer} from '../countdown-timer/countdown-timer';

export const eventCardTemplate = (context) => {
  return html`
    <style>
      .card {
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
        transition: 0.3s;
        border-radius: 10px;
        width: 100%;
        max-width: 00px;
        background-color: white;
        overflow: hidden;
        margin-bottom: 3px;
      }
      

      .card-img {
        border: none;
        object-fit: cover;
        resize: none;
        width: 100%; /* Ensure the image takes up 100% of the container width */
        height: 100%; /* Ensure the image takes up 100% of the container height */
        border-radius: 10px; /* Match the border-radius of the .card class */
      }


      .title {
        text-align: left;
        margin: 0;
        color: black;
        font-size: 1.4rem; /* Increased header font size */
        padding-left:3%;
        padding-top:3%;
      }

      .description {
        font-size: 0.9rem;
        text-align: left;
        color: black;
        padding: 3%;
      }
      
    </style>

    <div class="card">
      <h3 class="title">${context.title}</h3>
      <p class="description">${context.description}</p>
      <countdown-timer></countdown-timer>
      <input-image class="card-img" .selectedFile=${context.img}></input-image>
      
    </div>`;
};
