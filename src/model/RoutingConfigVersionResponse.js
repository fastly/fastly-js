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
 * The RoutingConfigVersionResponse model module.
 * @module model/RoutingConfigVersionResponse
 * @version 16.0.0
 */
class RoutingConfigVersionResponse {
    /**
     * Constructs a new <code>RoutingConfigVersionResponse</code>.
     * All attributes for a routing config version response.
     * @alias module:model/RoutingConfigVersionResponse
     */
    constructor() { 
        
        RoutingConfigVersionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoutingConfigVersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoutingConfigVersionResponse} obj Optional instance to populate.
     * @return {module:model/RoutingConfigVersionResponse} The populated <code>RoutingConfigVersionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoutingConfigVersionResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('activated_at')) {
                obj['activated_at'] = ApiClient.convertToType(data['activated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the version.
 * @member {String} id
 */
RoutingConfigVersionResponse.prototype['id'] = undefined;

/**
 * A freeform comment describing the version.
 * @member {String} comment
 */
RoutingConfigVersionResponse.prototype['comment'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
RoutingConfigVersionResponse.prototype['created_at'] = undefined;

/**
 * Timestamp of when the version was most recently activated. `null` if the version has never been activated.
 * @member {Date} activated_at
 */
RoutingConfigVersionResponse.prototype['activated_at'] = undefined;






export default RoutingConfigVersionResponse;

