import React from 'react';
import styles from './ItemCard.module.scss';
import phone from '../../assets/img/phone_image.png';
import phone1 from '../../assets/img/phone1.png';
import phone2 from '../../assets/img/phone3.png';
import phone3 from '../../assets/img/phone4.png';
import favourites from '../../assets/img/icons/favourites_heart.svg';
import { BackButton } from '../../components/BackButton/BackButton';

export const ItemCard: React.FC = () => {
  return (
    <>
      <BackButton />
      <main className={styles.product}>
        <h1>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h1>

        <div className={styles.product__container}>
          <article className={styles.product__photos}>
            <img
              src={phone}
              alt={styles.phone__image}
              className={styles.product__photos__main__image}
            />

            <div className={styles.product__photos__images}>
              <img
                src={phone1}
                alt="phone__image"
                className={styles.product__photos__images__image}
              />
              <img
                src={phone3}
                alt="phone__image"
                className={styles.product__photos__images__image}
              />
              <img
                src={phone2}
                alt="phone__image"
                className={styles.product__photos__images__image}
              />
              <img
                src={phone3}
                alt="phone__image"
                className={styles.product__photos__images__image}
              />
              <img
                src={phone1}
                alt="phone__image"
                className={styles.product__photos__images__image}
              />
            </div>
          </article>

          <article className={styles.product__card}>
            <div className={styles.colors__container}>
              <div className={styles.text__container}>
                <p className={styles.text__container__text__title}>
                  Available colors
                </p>
                <p className={styles.text__container__id}>ID: 802390</p>
              </div>

              <button
                type="button"
                className={styles.product__card__color__button}
              />
            </div>

            <div className={styles.capacity__container}>
              <div className={styles.text__container}>
                <p className={styles.text__container__text__title}>
                  Select capacity
                </p>
              </div>

              <button
                type="button"
                className={styles.product__card__capacity__button}
              >
                64
              </button>
            </div>

            <div className={styles.product__card__price}>
              <p className={styles.product__card__price__discount}>799</p>
              <p className={styles.product__card__price__regular}>1199</p>
            </div>

            <div className={styles.button__container}>
              <button
                type="button"
                className={styles.product__card__buy__button}
              >
                Add to cart
              </button>

              <button
                type="button"
                className={styles.product__card__fav__button}
              >
                <img src={favourites} alt="favorites" />
              </button>
            </div>

            <div className={styles.product__card__info}>
              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Screen</p>
                <p className={styles.text__container__num}>
                  6.5&apos;&apos; OLED
                </p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Resolution</p>
                <p className={styles.text__container__num}>2688x1242</p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Processor</p>
                <p className={styles.text__container__num}>Apple A12 Bionic</p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>RAM</p>
                <p className={styles.text__container__num}>3 GB</p>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.about__container}>
          <article className={styles.product__about}>
            <h2 className={styles.product__about__header}>About</h2>
            <h3 className={styles.product__about__title}>
              And then there was Pro
            </h3>
            <p className={styles.product__about__text}>
              A transformative triple‑camera system that adds tons of capability
              without complexity.
            </p>
            <p className={styles.product__about__text}>
              An unprecedented leap in battery life. And a mind‑blowing chip
              that doubles down on machine learning and pushes the boundaries of
              what a smartphone can do. Welcome to the first iPhone powerful
              enough to be called Pro.
            </p>

            <h3 className={styles.product__about__title}>Camera</h3>
            <p className={styles.product__about__text}>
              Meet the first triple‑camera system to combine cutting‑edge
              technology with the legendary simplicity of iPhone. Capture up to
              four times more scene. Get beautiful images in drastically lower
              light. Shoot the highest‑quality video in a smartphone — then edit
              with the same tools you love for photos. You&apos;ve never shot
              with anything like it.
            </p>

            <h3 className={styles.product__about__title}>
              Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
              Love it.
            </h3>
            <p className={styles.product__about__text}>
              iPhone 11 Pro lets you capture videos that are beautifully true to
              life, with greater detail and smoother motion. Epic processing
              power means it can shoot 4K video with extended dynamic range and
              cinematic video stabilization — all at 60 fps. You get more
              creative control, too, with four times more scene and powerful new
              editing tools to play with.
            </p>
          </article>

          <article className={styles.product__tech__specs}>
            <h2 className={styles.product__tech__specs__header}>Tech specs</h2>
            <div className={styles.product__tech__specs__info}>
              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Screen</p>
                <p className={styles.text__container__num}>
                  6.5&apos;&apos; OLED
                </p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Resolution</p>
                <p className={styles.text__container__num}>2688x1242</p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Processor</p>
                <p className={styles.text__container__num}>Apple A12 Bionic</p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>RAM</p>
                <p className={styles.text__container__num}>3 GB</p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Built in memory</p>
                <p className={styles.text__container__num}>64 GB</p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Camera</p>
                <p className={styles.text__container__num}>
                  12 Mp + 12 Mp + 12 Mp (Triple)
                </p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Zoom</p>
                <p className={styles.text__container__num}>Optical, 2x</p>
              </div>

              <div className={styles.text__container}>
                <p className={styles.text__container__text}>Cell</p>
                <p className={styles.text__container__num}>GSM, LTE, UMTS</p>
              </div>
            </div>
          </article>

          <article>
            <h2 className={styles.slider__cards}>You may also like</h2>
          </article>
        </div>
      </main>
    </>
  );
};
