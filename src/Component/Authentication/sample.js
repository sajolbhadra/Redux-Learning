import React from 'react';

const sample = () => {
    return (
        <div>
            <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">My Profile</h5>
                            <button type="button" className="close" onClick={this.handleShow}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.handleShow}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default sample;