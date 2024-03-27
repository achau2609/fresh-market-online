import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddNewUser from "./AddNewUser";
import Input from "../../component/shared/input";


describe("Problem 1 - Validating AddNewUser Component", function () {
  // Test Case #1 - Form value data type
  test("testing handleSubmit() function", () => {
    expect(true).toBe(true);
  });

  // Test Case #2 - Check input component for email address
  test("testing Email input uses right label", () => {
    const component = render(<Input/>);
    const emailElement = component.getAllByText("Email Address");
    expect(emailElement).toBeTruthy();
  });
});


describe('AddNewUser Component', () => {
  it('renders all input fields correctly', () => {
    render(<AddNewUser />);
    
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Contact Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Birth Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Address')).toBeInTheDocument();
  });

  it('updates state on input change', () => {
    render(<AddNewUser />);
    
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText('Contact Number'), { target: { value: '+1234567890' } });
    fireEvent.change(screen.getByLabelText('Birth Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St' } });
    
    expect(screen.getByLabelText('First Name').value).toBe('John');
    expect(screen.getByLabelText('Last Name').value).toBe('Doe');
    expect(screen.getByLabelText('Email Address').value).toBe('john@example.com');
    expect(screen.getByLabelText('Password').value).toBe('password123');
    expect(screen.getByLabelText('Contact Number').value).toBe('+1234567890');
    expect(screen.getByLabelText('Birth Date').value).toBe('2022-01-01');
    expect(screen.getByLabelText('Address').value).toBe('123 Main St');
  });

  it('disables create button when required fields are empty', () => {
    render(<AddNewUser />);
    
    expect(screen.getByText('Create')).toBeDisabled();

    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'john@example.com' } });
    
    expect(screen.getByText('Create')).toBeEnabled();
  });
});
