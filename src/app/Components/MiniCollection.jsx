import React from 'react';


const MiniCollection = () => {
  return (
    <section className="mini-container">
        <div className='cards-container'>
            <div className='card card-1'>
                <div className='card-img-container'>
                    <img src='/left.png' alt='image-collection' />
                </div>

                <div className='card-image-content'>
                    <h4>Bespoke Outfits</h4>
                    <p>Tailored for Perfection</p>
                </div>
            </div>
            <div className='card card-2'>
            <div className='card-img-container'>
                    <img src='/center.png' alt='image-collection' />
                </div>

                <div className='card-image-content'>
                    <h4>Ready to Wear</h4>
                    <p>Effortless Elegance</p>
                </div>
            </div>
            <div className='card card-3'>
            <div className='card-img-container'>
                    <img src='/right.png' alt='image-collection' />
                </div>

                <div className='card-image-content'>
                    <h4>Sewing and Fitting</h4>
                    <p>Made Just for</p>
                </div>
            </div>
        </div>

        <div className='collection-overlay'>
            <div className='overlay-text-cont'>
                <hr className='shortline'/>
                <h1 className="overlay-text"><span>BeSpoke Outfits</span></h1>
            </div>
            <div className='overlay-text-cont overlay-right'>
                 <h1 className="overlay-text overlay-text-right"><span>Ready To Wear</span> </h1>
                    <hr className='shortline shortline-right'/>
            </div>
            <div className='overlay-text-cont'>
                <hr className='shortline shortline-left'/>
                 <h1 className="overlay-text overlay-text-left"><span>Sewing & Fitting</span></h1>
            </div>

        </div>
    </section>
  )
}

export default MiniCollection
