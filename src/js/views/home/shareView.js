import { images } from "../../../assets/images";

export const createShareView = function () {
  return {
    generateMarkup() {
      return `
               <!-- SHARE -->
        <section class="section share">
          <div class="share__heading text-center">
            <p class="text-body-xl range__text">Share your setup with</p>
            <h2 class="section-title">#FuniroFurniture</h2>
          </div>

          <div class="share__gallery">
             <img  src="${images.gallery_01}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_02}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_03}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_04}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_05}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_06}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_07}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_08}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_09}" alt=""  class="share__gallery-img"/>
          </div>
        </section>
      `;
    },
  };
};
