import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Image } from 'native-base'
import { Constants } from 'expo'
import { connect } from 'react-redux'

export class HomeScreen extends Component {

  render() {
    return (
      <Container>
        <View style={styles.statusBar} />
        <Content style={{ margin: 5 }}>
          <View>
            {
              this.props.events.map(e => {
                return (
                  <Card>
                    <CardItem>
                      <Image source={require(e.imageUrl)} />
                      <View style={{flexDirection: "column"}}>
                        <Text>{e.name}</Text>
                        <Text>{e.data}</Text>
                        <Text>{e.place}</Text>
                        {/* <Right>
                          <Icon name="arrow-forward" />
                        </Right> */}
                      </View>
                    </CardItem>
                  </Card>
                )
              })
            }
          </View>
        </Content>
      </Container>

    )
  }
}

const mapStateToProps = (state) => ({
  events: state.event.events,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#f75611",
    height: Constants.statusBarHeight,
  },
})
