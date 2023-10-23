import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
            setVisible(true) 
        }  
        else if (scrolled <= 300){ 
            setVisible(false) 
        } 
    }; 
  
    const scrollToTop = () => { 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        }); 
    }; 

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);
  
    return (
        visible && (
            <button
                title='Back to top'
                className='scroll-top'
                onClick={scrollToTop}
            >
                <AiOutlineArrowUp />
            </button>
        )
    )
}

export default ScrollToTopButton
