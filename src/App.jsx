import './App.css';
import { TwfollowCard } from './twfollowCard';


export const App = () =>{

    return(
        <section className='App'>
            <TwfollowCard
                isFollowing 
                name='Vivas Castro Carlos' 
                username='vivascastroc'/>

            <TwfollowCard 
                isFollowing={false} 
                name='Vivas Castro Andres' 
                username='willianandres'/>

            <TwfollowCard 
                isFollowing 
                name='mark zuckerberg' 
                username='markzuckerberg'/>

        </section>
    )
}