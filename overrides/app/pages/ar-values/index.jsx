/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {List, ListItem} from '@salesforce/retail-react-app/app/components/shared/ui'
import React from 'react'

const ArValues = () => {
    return (
        <div style={{padding: '3rem 0rem'}}>
            <h1 style={{textAlign: 'center', fontSize: '4rem'}}> 💗 Values</h1>
            <List spacing={3}>
                <ListItem style={{textAlign: 'center', fontSize: '2rem'}}>Creativity</ListItem>
                <ListItem style={{textAlign: 'center', fontSize: '2rem'}}>Loyalty</ListItem>
                <ListItem style={{textAlign: 'center', fontSize: '2rem'}}>Excellence</ListItem>
                <ListItem style={{textAlign: 'center', fontSize: '2rem'}}>Good Judgement</ListItem>
                <ListItem style={{textAlign: 'center', fontSize: '2rem'}}>Integrity</ListItem>
                <ListItem style={{textAlign: 'center', fontSize: '2rem'}}>Teamwork</ListItem>
            </List>
        </div>
    )
}

export default ArValues
