/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SudoResponse model module.
 * @module model/SudoResponse
 * @version 14.1.0
 */
class SudoResponse {
    /**
     * Constructs a new <code>SudoResponse</code>.
     * @alias module:model/SudoResponse
     */
    constructor() { 
        
        SudoResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SudoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SudoResponse} obj Optional instance to populate.
     * @return {module:model/SudoResponse} The populated <code>SudoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SudoResponse();

            if (data.hasOwnProperty('expiry_time')) {
                obj['expiry_time'] = ApiClient.convertToType(data['expiry_time'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * A UTC time-stamp of when sudo access will expire. If blank, sudo access expires five minutes after the request.
 * @member {Date} expiry_time
 */
SudoResponse.prototype['expiry_time'] = undefined;






export default SudoResponse;

