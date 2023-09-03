import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilteredCategory } from '../config';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealsList';

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name]);

    return (
        <>
            <button className="btn" onClick={() => navigate(-1)}>
                Go back
            </button>
            {meals.lenght ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };
