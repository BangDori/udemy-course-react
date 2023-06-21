import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState('');

  useEffect(() => {
    const getMeals = async () => {
      setIsLoading(true);
      const response = await axios.get(
        'https://react-http-2c997-default-rtdb.firebaseio.com/meals.json',
      );

      if (!response.status) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.data;

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    getMeals().catch((error) => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <section className={classes.MealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  if (httpError)
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
