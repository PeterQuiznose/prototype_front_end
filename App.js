import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './components/Map/styles'
import Zone1 from './components/Zones/Zone1/Zone1'
import Zone1A from './components/Zones/Zone1A/Zone1A'
import Zone2 from './components/Zones/Zone2/Zone2';
import Zone3 from './components/Zones/Zone3/Zone3';
import Zone4 from './components/Zones/Zone4/Zone4';
import Zone5 from './components/Zones/Zone5/Zone5';
import Zone5A from './components/Zones/Zone5A/Zone5A';
import Zone6 from './components/Zones/Zone6/Zone6';
import Zone7 from './components/Zones/Zone7/Zone7';
import Zone8 from './components/Zones/Zone8/Zone8';

export default App = () => {
    return (

        <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: 55.9533,
            longitude: -3.1883,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }}>
            <Zone1 />
            <Zone1A />
            <Zone2 />
            <Zone3 />
            <Zone4 />
            <Zone5 />
            <Zone5A />
            <Zone6 />
            <Zone7 />
            <Zone8 />
        </MapView>
    );
};
