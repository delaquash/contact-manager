import React, { Component } from 'react';
import Title from './Title';
import '../components/css/Services.css';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

 class Services extends Component {
     state = {
         services : [
             {
                 icon:<FaCocktail />,
                 title: 'Free Cocktails',
                 info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
             },
             {
                 icon: <FaHiking />,
                 title:'Hike to the see the world in our own angle and enjoy pure elegance and freshness',
                 info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
             },
             {

                 icon: <FaShuttleVan />,
                 title:'Worrying about movement, We have got you covered',
                 info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
             },
              {
                 icon: <FaBeer />,
                 title:'There is life in the bottle, more life if the bottle is a beer when you are in our resort',
                 info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
             }
         ]
     }
    render() {
        return (
            <section className="services">
               <Title title="services" />
               <div className="services-center">
               {this.state.services.map((item, index) =>{
                   return (
                       <article key={index} className="services">
                       <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                       </article>
                   )
               } )}
               </div>
            </section>
        )
    }
}

export default Services;
