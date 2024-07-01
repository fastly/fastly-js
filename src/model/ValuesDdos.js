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
 * The ValuesDdos model module.
 * @module model/ValuesDdos
 * @version 7.5.0
 */
class ValuesDdos {
    /**
     * Constructs a new <code>ValuesDdos</code>.
     * The results of the query, optionally filtered and grouped over the requested timespan.
     * @alias module:model/ValuesDdos
     */
    constructor() { 
        
        ValuesDdos.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValuesDdos</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValuesDdos} obj Optional instance to populate.
     * @return {module:model/ValuesDdos} The populated <code>ValuesDdos</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValuesDdos();

            if (data.hasOwnProperty('ddos_action_limit_streams_connections')) {
                obj['ddos_action_limit_streams_connections'] = ApiClient.convertToType(data['ddos_action_limit_streams_connections'], 'Number');
            }
            if (data.hasOwnProperty('ddos_action_limit_streams_requests')) {
                obj['ddos_action_limit_streams_requests'] = ApiClient.convertToType(data['ddos_action_limit_streams_requests'], 'Number');
            }
            if (data.hasOwnProperty('ddos_action_tarpit_accept')) {
                obj['ddos_action_tarpit_accept'] = ApiClient.convertToType(data['ddos_action_tarpit_accept'], 'Number');
            }
            if (data.hasOwnProperty('ddos_action_tarpit')) {
                obj['ddos_action_tarpit'] = ApiClient.convertToType(data['ddos_action_tarpit'], 'Number');
            }
            if (data.hasOwnProperty('ddos_action_close')) {
                obj['ddos_action_close'] = ApiClient.convertToType(data['ddos_action_close'], 'Number');
            }
            if (data.hasOwnProperty('ddos_action_blackhole')) {
                obj['ddos_action_blackhole'] = ApiClient.convertToType(data['ddos_action_blackhole'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * For HTTP/2, the number of connections the limit-streams action was applied to. The limit-streams action caps the allowed number of concurrent streams in a connection.
 * @member {Number} ddos_action_limit_streams_connections
 */
ValuesDdos.prototype['ddos_action_limit_streams_connections'] = undefined;

/**
 * For HTTP/2, the number of requests made on a connection for which the limit-streams action was taken. The limit-streams action caps the allowed number of concurrent streams in a connection.
 * @member {Number} ddos_action_limit_streams_requests
 */
ValuesDdos.prototype['ddos_action_limit_streams_requests'] = undefined;

/**
 * The number of times the tarpit-accept action was taken. The tarpit-accept action adds a delay when accepting future connections.
 * @member {Number} ddos_action_tarpit_accept
 */
ValuesDdos.prototype['ddos_action_tarpit_accept'] = undefined;

/**
 * The number of times the tarpit action was taken. The tarpit action delays writing the response to the client.
 * @member {Number} ddos_action_tarpit
 */
ValuesDdos.prototype['ddos_action_tarpit'] = undefined;

/**
 * The number of times the close action was taken. The close action aborts the connection as soon as possible. The close action takes effect either right after accept, right after the client hello, or right after the response was sent.
 * @member {Number} ddos_action_close
 */
ValuesDdos.prototype['ddos_action_close'] = undefined;

/**
 * The number of times the blackhole action was taken. The blackhole action quietly closes a TCP connection without sending a reset. The blackhole action quietly closes a TCP connection without notifying its peer (all TCP state is dropped).
 * @member {Number} ddos_action_blackhole
 */
ValuesDdos.prototype['ddos_action_blackhole'] = undefined;






export default ValuesDdos;

