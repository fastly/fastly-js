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
 * The AgentKeyMeta model module.
 * @module model/AgentKeyMeta
 * @version 16.1.0
 */
class AgentKeyMeta {
    /**
     * Constructs a new <code>AgentKeyMeta</code>.
     * Metadata about the agent keys request.
     * @alias module:model/AgentKeyMeta
     * @param total {Number} Total number of agent keys.
     */
    constructor(total) { 
        
        AgentKeyMeta.initialize(this, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total) { 
        obj['total'] = total;
    }

    /**
     * Constructs a <code>AgentKeyMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentKeyMeta} obj Optional instance to populate.
     * @return {module:model/AgentKeyMeta} The populated <code>AgentKeyMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentKeyMeta();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Total number of agent keys.
 * @member {Number} total
 */
AgentKeyMeta.prototype['total'] = undefined;






export default AgentKeyMeta;

