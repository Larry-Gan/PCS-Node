def geoids_search(app, geoids):
    data = []

    # Collection for office preview info filtered by geoid
    col_ref = app.officedb.collection('officeLocations')

    for geoid in geoids:
        # Fetch all relevant office previews for geoid
        data.append([doc.to_dict() for doc in col_ref.where('geoid', '==', geoid).stream()])

    return {'offices': data}


def office_ids_search(app, office_ids):
    # Collection for full office info
    col_ref = app.officedb.collection('offices')

    # Get office document matching each office id
    return {
        'offices': [col_ref.document(office_id).get().to_dict() for office_id in office_ids]
    }
