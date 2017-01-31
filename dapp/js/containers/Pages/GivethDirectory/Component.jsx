import React from "react";
import { Grid, Row } from "react-bootstrap";

const Component = ({ givethDirectoryState }) =>
    <Grid>
        <Row>
            <pre>{ JSON.stringify(givethDirectoryState, 0, 2) }</pre>
        </Row>
    </Grid>;

Component.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
};

export default Component;