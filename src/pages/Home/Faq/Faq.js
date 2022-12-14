import { Box } from '@mui/system';
import React from 'react';
import CreativeAccordion from '../../../components/CreativeAccordion/CreativeAccordion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Faq = () => {
    return (
        <Box sx={{
            mb: 8,
        }}>
            <SectionTitle title='Frequently asked' colored='question'>
            </SectionTitle>
            <Box sx={{
               display: 'flex',
               flexDirection: 'column',
               gap: 2,
               mt: 5
            }}>
                <CreativeAccordion
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                ></CreativeAccordion>
                <CreativeAccordion
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                ></CreativeAccordion>
                <CreativeAccordion
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                ></CreativeAccordion>

            </Box>
        </Box>
    );
};

export default Faq;