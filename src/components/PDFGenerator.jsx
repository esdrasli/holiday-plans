import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import styled from 'styled-components';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10
  },
  plan: {
    marginBottom: 10
  }
});
const BackButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

function PDFGenerator({ plans }) {
    const handleGoBack = () => {
        window.location.reload();
      };
  return (
    <>
    <BackButton onClick={handleGoBack}>Voltar</BackButton>
    <PDFViewer style={{ width: '100%', height: '500px' }}>
          <Document>
              <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                      <Text style={styles.title}>Holiday Plans</Text>
                      {plans.map((plan, index) => (
                          <View key={index} style={styles.plan}>
                              <Text>Title: {plan.title}</Text>
                              <Text>Description: {plan.description}</Text>
                              <Text>Date: {plan.date}</Text>
                              <Text>Location: {plan.location}</Text>
                              <Text>Participants: {plan.participants}</Text>
                          </View>
                      ))}
                  </View>
              </Page>
          </Document>
      </PDFViewer></>
  );
}

export default PDFGenerator;
