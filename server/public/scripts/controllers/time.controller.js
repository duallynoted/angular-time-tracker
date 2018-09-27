timeTrackerApp.controller( 'TimeController', ['$http', function ( $http ) {

    // controller setup
    console.log( 'TimeController loaded!' );
    const self = this;

    // variables and stuff
    self.displayTimeEntries = [];


    // --------------------
    // CRUD Stuff
    // --------------------

    // Create
    self.addTimeEntry = function ( thingToAdd ) {

        console.log( '--- in addTimeEntry:' );
        console.log( thingToAdd );

        $http.post( '/time', thingToAdd )
            .then( function () {
                alert( 'New Time Entry successfully added!' );
            } )
            .catch( function ( error ) {
                alert( 'There was a problem adding the new Time Entry.' );
                console.log( '--- Error in addTimeEntry:' );
                console.log( error );
            } )

    } // end self.addTimeEntry

    // Read
    self.getTimeEntry = function () {

        console.log( '--- in getTimeEntry.' );

        $http.get( '/time' )
            .then( function ( results ) {
                console.log( '--- back from the server with:' );
                console.log( results );
                self.displayTimeEntries = results.data;
            } )
            .catch( function ( error ) {
                alert( 'There was a problem getting the Time Entries.' );
                console.log( '--- Error in getTimeEntry:' );
                console.log( error );
            } )

    }


    // Update

    // Delete
    self.deleteTimeEntry = function ( thingToDelete ) {

        console.log( '--- in deleteTimeEntry:' );
        console.log( thingToDelete );

        $http.delete( `/time/${thingToDelete.id}` )
            .then( function () {
                alert( 'Time Entry successfully deleted!' );
                self.getTimeEntry();
            } )
            .catch( function ( error ) {
                alert( 'There was a problem deleting the Time Entry.' );
                console.log( '--- Error in deleteTimeEntry:' );
                console.log( error );
            } )

    }

    // initial calls
    self.getTimeEntry();

}] )