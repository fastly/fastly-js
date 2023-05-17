/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Invitation from './Invitation';
import InvitationResponseAllOf from './InvitationResponseAllOf';
import InvitationResponseData from './InvitationResponseData';

/**
 * The InvitationResponse model module.
 * @module model/InvitationResponse
 * @version 4.1.0
 */
class InvitationResponse {
    /**
     * Constructs a new <code>InvitationResponse</code>.
     * @alias module:model/InvitationResponse
     * @implements module:model/Invitation
     * @implements module:model/InvitationResponseAllOf
     */
    constructor() { 
        Invitation.initialize(this);InvitationResponseAllOf.initialize(this);
        InvitationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvitationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationResponse} obj Optional instance to populate.
     * @return {module:model/InvitationResponse} The populated <code>InvitationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvitationResponse();
            Invitation.constructFromObject(data, obj);
            InvitationResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = InvitationResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InvitationResponseData} data
 */
InvitationResponse.prototype['data'] = undefined;


// Implement Invitation interface:
/**
 * @member {module:model/InvitationData} data
 */
Invitation.prototype['data'] = undefined;
// Implement InvitationResponseAllOf interface:
/**
 * @member {module:model/InvitationResponseData} data
 */
InvitationResponseAllOf.prototype['data'] = undefined;




export default InvitationResponse;

