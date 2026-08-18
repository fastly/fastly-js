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
import AgentKey from './AgentKey';
import AgentKeyMeta from './AgentKeyMeta';

/**
 * The InlineResponse20019 model module.
 * @module model/InlineResponse20019
 * @version 16.1.0
 */
class InlineResponse20019 {
    /**
     * Constructs a new <code>InlineResponse20019</code>.
     * @alias module:model/InlineResponse20019
     */
    constructor() { 
        
        InlineResponse20019.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20019} obj Optional instance to populate.
     * @return {module:model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20019();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = AgentKeyMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [AgentKey]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AgentKeyMeta} meta
 */
InlineResponse20019.prototype['meta'] = undefined;

/**
 * The agent keys returned by the request.
 * @member {Array.<module:model/AgentKey>} data
 */
InlineResponse20019.prototype['data'] = undefined;






export default InlineResponse20019;

