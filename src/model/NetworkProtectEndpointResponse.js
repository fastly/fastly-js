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
import NetworkProtectEndpoint from './NetworkProtectEndpoint';
import NetworkProtectEndpointResponseFields from './NetworkProtectEndpointResponseFields';

/**
 * The NetworkProtectEndpointResponse model module.
 * @module model/NetworkProtectEndpointResponse
 * @version 17.0.0
 */
class NetworkProtectEndpointResponse {
    /**
     * Constructs a new <code>NetworkProtectEndpointResponse</code>.
     * A Network Protect endpoint response.
     * @alias module:model/NetworkProtectEndpointResponse
     * @implements module:model/NetworkProtectEndpoint
     * @implements module:model/NetworkProtectEndpointResponseFields
     * @param name {String} A human-readable name, unique within the customer.
     * @param ip_address {String} The GRE destination address, unique within the customer. It cannot be changed after endpoint creation.
     * @param id {String} A read-only unique identifier for a Network Protect resource.
     * @param created_at {Date} An ISO 8601 timestamp in UTC.
     * @param updated_at {Date} An ISO 8601 timestamp in UTC.
     */
    constructor(name, ip_address, id, created_at, updated_at) { 
        NetworkProtectEndpoint.initialize(this, name, ip_address);NetworkProtectEndpointResponseFields.initialize(this, id, created_at, updated_at);
        NetworkProtectEndpointResponse.initialize(this, name, ip_address, id, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, ip_address, id, created_at, updated_at) { 
        obj['name'] = name;
        obj['ip_address'] = ip_address;
        obj['id'] = id;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>NetworkProtectEndpointResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectEndpointResponse} obj Optional instance to populate.
     * @return {module:model/NetworkProtectEndpointResponse} The populated <code>NetworkProtectEndpointResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectEndpointResponse();
            NetworkProtectEndpoint.constructFromObject(data, obj);
            NetworkProtectEndpointResponseFields.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectEndpointResponse.prototype['name'] = undefined;

/**
 * The GRE destination address, unique within the customer. It cannot be changed after endpoint creation.
 * @member {String} ip_address
 */
NetworkProtectEndpointResponse.prototype['ip_address'] = undefined;

/**
 * A read-only unique identifier for a Network Protect resource.
 * @member {String} id
 */
NetworkProtectEndpointResponse.prototype['id'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectEndpointResponse.prototype['created_at'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectEndpointResponse.prototype['updated_at'] = undefined;


// Implement NetworkProtectEndpoint interface:
/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectEndpoint.prototype['name'] = undefined;
/**
 * The GRE destination address, unique within the customer. It cannot be changed after endpoint creation.
 * @member {String} ip_address
 */
NetworkProtectEndpoint.prototype['ip_address'] = undefined;
// Implement NetworkProtectEndpointResponseFields interface:
/**
 * A read-only unique identifier for a Network Protect resource.
 * @member {String} id
 */
NetworkProtectEndpointResponseFields.prototype['id'] = undefined;
/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectEndpointResponseFields.prototype['created_at'] = undefined;
/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectEndpointResponseFields.prototype['updated_at'] = undefined;




export default NetworkProtectEndpointResponse;

