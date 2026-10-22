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
 * The NetworkProtectEndpointCreate model module.
 * @module model/NetworkProtectEndpointCreate
 * @version 17.0.0
 */
class NetworkProtectEndpointCreate {
    /**
     * Constructs a new <code>NetworkProtectEndpointCreate</code>.
     * Attributes accepted when creating an endpoint.
     * @alias module:model/NetworkProtectEndpointCreate
     * @param name {String} A human-readable name, unique within the customer.
     * @param ip_address {String} The GRE destination address, unique within the customer. It cannot be changed after endpoint creation.
     */
    constructor(name, ip_address) { 
        
        NetworkProtectEndpointCreate.initialize(this, name, ip_address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, ip_address) { 
        obj['name'] = name;
        obj['ip_address'] = ip_address;
    }

    /**
     * Constructs a <code>NetworkProtectEndpointCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectEndpointCreate} obj Optional instance to populate.
     * @return {module:model/NetworkProtectEndpointCreate} The populated <code>NetworkProtectEndpointCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectEndpointCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectEndpointCreate.prototype['name'] = undefined;

/**
 * The GRE destination address, unique within the customer. It cannot be changed after endpoint creation.
 * @member {String} ip_address
 */
NetworkProtectEndpointCreate.prototype['ip_address'] = undefined;






export default NetworkProtectEndpointCreate;

