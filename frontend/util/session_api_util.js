export const login = user => (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
    })
  );
  
  export const signup = user => {
    // debugger
    return $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user }
    })
  };


  export const logout = () => (
    $.ajax({
      method: 'DELETE',
      url: '/api/session'
    })
  );


  export const updateUser = formData => {
    return $.ajax({
      method: 'PATCH',
      url: `/api/users/${parseInt(formData.get('user[id]'))}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    })
  };
  
  