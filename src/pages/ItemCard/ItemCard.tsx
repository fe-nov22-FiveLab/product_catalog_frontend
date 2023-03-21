import React, { useEffect, useState } from 'react';
import styles from './ItemCard.module.scss';
import favourites from '../../assets/img/icons/favourites_heart.svg';
import favourites_heart_red from '../../assets/img/icons/favourites_heart_red.svg';
import { BackButton } from '../../components/BackButton/BackButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addPhoneToCart,
  removeOnePhoneFromCart,
  selectCart,
} from '../../features/cart/cartSlice';
import { getPhoneDetails, getPhones } from '../../utils/fetchData';
import { useParams } from 'react-router';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { PhoneColor, PhoneColors } from '../../@types/PhoneColors';
import { Phone } from '../../@types/Phone';

export const ItemCard: React.FC = () => {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [mainPhoto, setMainPhoto] = useState('');
  const [phonesFromServer, setPhonesFromServer] = useState<Phone[]>([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).toString();

  const { phoneId = '' } = useParams();
  const { phones } = useAppSelector(selectCart);

  const dispatch = useAppDispatch();

  const isAddedToCart = phones.find((phone) => phone.phoneId === phoneId);
  const isAddedToFavourites = phones.find((phone) => phone.phoneId === phoneId);

  useEffect(() => {
    const loadPhoneDetails = async () => {
      try {
        const loadedPhone = await getPhoneDetails(phoneId);

        if (loadedPhone) {
          setPhone(loadedPhone);
        }
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadPhoneDetails();
  }, [phoneId]);

  useEffect(() => {
    const loadPhonesData = async () => {
      try {
        setIsLoading(true);
        const phonesData = await getPhones(searchParams);
        setPhonesFromServer(phonesData.phones);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadPhonesData();
  }, [location.search]);

  useEffect(() => {
    if (phone) {
      setMainPhoto(`${phone.phoneDetails.images[0]}`);
    }
  }, [phone?.phoneDetails.images[0]]);

  const switchColor = (color: string) => {
    if (phoneId) {
      const newId = phoneId.split('-').reverse();

      newId[0] = color;

      return newId.reverse().join('-');
    }

    return null;
  };

  const switchCapacity = (capacity: string) => {
    if (phoneId) {
      const newId = phoneId.split('-').reverse();

      newId[1] = capacity.toLocaleLowerCase();

      return newId.reverse().join('-');
    }

    return null;
  };

  const phonesData = Object.values(phonesFromServer);
  const phoneToAdd = phonesData.find((phone) => phone.phoneId === phoneId);

  return (
    <div className={styles.container}>
      <BackButton />

      {!phone ? (
        isLoading
      ) : (
        <main className={styles.product}>
          <h1>{`${phone.phoneDetails.name} (iMT9G2FS/A)`}</h1>

          <div className={styles.product__container}>
            <article className={styles.product__photos}>
              <div className={styles.product__photos__container__main}>
                <img
                  src={mainPhoto}
                  alt={styles.phone__image}
                  className={styles.product__photos__main__image}
                />
              </div>

              <div className={styles.product__photos__images}>
                {phone.phoneDetails.images.map((image) => {
                  const imageId = image.split('/').reverse()[0];

                  return (
                    <div
                      key={imageId}
                      className={classNames(
                        image === mainPhoto
                          ? styles.product__photos__container__image__is_active
                          : styles.product__photos__container__image,
                      )}
                    >
                      <img
                        key={imageId}
                        src={image}
                        alt="phone__image"
                        className={styles.product__photos__image}
                        onClick={() => setMainPhoto(image)}
                      />
                    </div>
                  );
                })}
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

                <div className={styles.product__card__colors}>
                  {phone.phoneDetails.colorsAvailable.map((color) => {
                    const style = {
                      background: PhoneColors[color as PhoneColor],
                    };

                    return (
                      <Link
                        to={`/phones/${switchColor(color)}`}
                        key={color}
                        className={classNames(
                          color !== phone.phoneDetails.color
                            ? styles.product__card__color__button
                            : styles.product__card__color__button__is_active,
                        )}
                        style={style}
                      />
                    );
                  })}
                </div>
              </div>

              <div className={styles.capacity__container}>
                <div className={styles.text__container}>
                  <p className={styles.text__container__text__title}>
                    Select capacity
                  </p>
                </div>

                <div className="product__card__capacity">
                  {phone.phoneDetails.capacityAvailable.map((capacity) => {
                    return (
                      <Link
                        to={`/phones/${switchCapacity(capacity)}`}
                        key={capacity}
                        type="button"
                        className={classNames(
                          capacity !== phone.phoneDetails.capacity
                            ? styles.product__card__capacity__button
                            : styles.product__card__capacity__button__is_active,
                        )}
                      >
                        {`${capacity}`}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className={styles.product__card__price}>
                <p className={styles.product__card__price__discount}>
                  {phone.phoneDetails.priceDiscount}
                </p>
                <p className={styles.product__card__price__regular}>
                  {phone.phoneDetails.priceRegular}
                </p>
              </div>

              <div className={styles.button__container}>
                <button
                  type="button"
                  className={classNames(styles.product__card__buy__button, {
                    [styles.product__card__buy__button__is_active]:
                      isAddedToCart,
                  })}
                  //onClick={() => dispatch(addPhoneToCart(phoneToAdd))}
                  //disabled={isAddedToCart}
                >
                  {' '}
                  {isAddedToCart ? 'Added' : 'Add to cart'}{' '}
                </button>

                {!isAddedToFavourites ? (
                  <button
                    type="button"
                    className={styles.product__card__fav__button}
                  >
                    <img src={favourites} alt="favorites" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className={styles.product__card__fav__button__red}
                    //onClick={() => dispatch(removeOnePhoneFromCart(phones.phoneId))}
                  >
                    <img src={favourites_heart_red} alt="favourites" />
                  </button>
                )}
              </div>

              <div className={styles.product__card__info}>
                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>Screen</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.screen}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>Resolution</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.resolution}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>Processor</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.processor}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>RAM</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.ram}
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className={styles.about__container}>
            <article className={styles.product__about}>
              <h2 className={styles.product__about__header}>About</h2>
              <h3 className={styles.product__about__title}>
                {phone.phoneDetails.description[0].title}
              </h3>
              <p className={styles.product__about__text}>
                {phone.phoneDetails.description[0].text[0]}
              </p>
              <p className={styles.product__about__text}>
                {phone.phoneDetails.description[0].text[1]}
              </p>

              <h3 className={styles.product__about__title}>
                {phone.phoneDetails.description[1].title}
              </h3>
              <p className={styles.product__about__text}>
                {phone.phoneDetails.description[1].text[0]}
              </p>

              <h3 className={styles.product__about__title}>
                {phone.phoneDetails.description[2].title}
              </h3>
              <p className={styles.product__about__text}>
                {phone.phoneDetails.description[2].text[0]}
              </p>
            </article>

            <article className={styles.product__tech__specs}>
              <h2 className={styles.product__tech__specs__header}>
                Tech specs
              </h2>
              <div className={styles.product__tech__specs__info}>
                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>Screen</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.screen}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>Resolution</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.resolution}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>Processor</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.processor}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>RAM</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.ram}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>
                    Built in memory
                  </p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.capacity}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>Camera</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.camera}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>Zoom</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.zoom}
                  </p>
                </div>

                <div className={styles.text__container}>
                  <p className={styles.text__container__text}>Cell</p>
                  <p className={styles.text__container__num}>
                    {phone.phoneDetails.cell.join(', ')}
                  </p>
                </div>
              </div>
            </article>

            <article>
              <h2 className={styles.slider__cards}>You may also like</h2>
            </article>
          </div>
        </main>
      )}
    </div>
  );
};
