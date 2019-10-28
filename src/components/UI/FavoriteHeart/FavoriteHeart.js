import React from 'react'; 


const FavoriteHeart = () => {
    const colors = {
        selected: '#e31b23',
        notSelected: '#777'
    }
    const heartStyle = {
        backgroundColor: ''
    };

    if ( colors.selected ) {
        heartStyle.backgroundColor = colors.notSelected
    };

    return (
        <div className="favoriteHeart">
            <div 
                className="favoriteHeart__svg"
                style={heartStyle}
                >

            </div>
        </div>

    );
};  

export default FavoriteHeart