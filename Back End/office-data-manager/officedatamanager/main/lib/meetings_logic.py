def geoids_search(app, geoids):
    data = []

    # Collection for meeting info filtered by geoid
    col_ref = app.officedb.collection('meetings')

    for geoid in geoids:
        # Fetch all relevant meetings for geoid
        data.append([doc.to_dict() for doc in col_ref.where('geoid', '==', geoid).stream()])

    return {'meetings': data}
