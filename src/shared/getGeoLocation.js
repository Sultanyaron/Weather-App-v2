export const checkGeoLocation = () => {
    if ("geolocation" in navigator) {

        const success = async (position) => {
          const { latitude }  = position.coords;
          const { longitude } = position.coords;
          return (true, latitude, longitude);
        };
    
        const error = () => {
            return false;
        };
    
        navigator.geolocation.getCurrentPosition(success, error);
      }else{
        return false
      };
};



