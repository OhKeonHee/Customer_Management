import React from 'react'

export const Customer = ({customers}) => {
  return (
    <div>
      {customers.map(it => (
        <>
          <CustomerProfile key={it.id} id={it.id} image={it.image} name={it.name} />
          <CustomerInfo key={it.id} birthday={it.birthday} gender={it.gender} job={it.job} />
        </>
      ))}
    </div>
  )
}

class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>{this.props.name}({this.props.id})</h2>
      </div>
    )
  }
}
class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    )
  }
}

export default Customer;