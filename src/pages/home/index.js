import { Button } from '@mui/material';
import React from 'react';
import { withTheme } from '@mui/styles';

import {SiteContent, Section} from './style/homeStyle';
import './style/homeStyle.css';


class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    render() {
        return(
            <SiteContent>

                <Section bg={'#071824'}>
                    <p>MAIN
                        dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                        urna nisl euismod nisi.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                    </p>
                    <Button variant='contained'>Fredo</Button>
                    <p>Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                        urna nisl euismod nisi.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                    </p>
                </Section>

            <div className='spacer layer3'></div>

                <Section bg={'#c11e67'}>
                    <p>1 
                        dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                        urna nisl euismod nisi.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                    </p>
                    <Button variant='contained'>Fredo</Button>
                    <p>Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                        urna nisl euismod nisi.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                    </p>
                </Section>

                <div className='spacer layer4'></div>

                <Section bg={'#071824'}>
                    <p>2 
                        dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                        urna nisl euismod nisi.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                    </p>
                    <Button variant='contained'>Fredo</Button>
                    <p>Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                        urna nisl euismod nisi.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                    </p>
                </Section>

                <div className='spacer layer1'></div>

                <Section bg={'#245d5f'}>
                    <p>3 
                        dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                        urna nisl euismod nisi.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                    </p>
                    <Button variant='contained'>Fredo</Button>
                    <p>Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                        urna nisl euismod nisi.
                        Sed euismod, urna eu tincidunt consectetur,
                        nisi nisl tincidunt nisi, eget consectetur
                    </p>
                </Section>
                
                <div className='spacer layer2'></div>



            </SiteContent>
        );
    }
}export default withTheme(Home);