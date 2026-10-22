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
import NetworkProtectEndpointPolicy from './NetworkProtectEndpointPolicy';
import NetworkProtectLoaStatus from './NetworkProtectLoaStatus';
import NetworkProtectNetwork from './NetworkProtectNetwork';
import NetworkProtectNetworkResponseFields from './NetworkProtectNetworkResponseFields';
import NetworkProtectRoaStatus from './NetworkProtectRoaStatus';

/**
 * The NetworkProtectNetworkResponse model module.
 * @module model/NetworkProtectNetworkResponse
 * @version 17.0.0
 */
class NetworkProtectNetworkResponse {
    /**
     * Constructs a new <code>NetworkProtectNetworkResponse</code>.
     * A Network Protect network response.
     * @alias module:model/NetworkProtectNetworkResponse
     * @implements module:model/NetworkProtectNetwork
     * @implements module:model/NetworkProtectNetworkResponseFields
     * @param name {String} A human-readable name, unique within the customer.
     * @param prefix {String} The CIDR block to protect, masked to its network address. It cannot be changed after creation.
     * @param endpoint_policies {Array.<module:model/NetworkProtectEndpointPolicy>} Complete endpoint policy configuration. A network has at most one policy per region and may have no policies.
     * @param advertise {Boolean} Desired advertisement state, which is not the same as observed route state. Enabling it requires approved LOA, valid ROA, and a ready default-region delivery policy. A later ROA failure does not turn an existing advertisement off; losing LOA approval or the last ready default endpoint does.
     * @param id {String} A read-only unique identifier for a Network Protect resource.
     * @param created_at {Date} An ISO 8601 timestamp in UTC.
     * @param updated_at {Date} An ISO 8601 timestamp in UTC.
     */
    constructor(name, prefix, endpoint_policies, advertise, id, created_at, updated_at) { 
        NetworkProtectNetwork.initialize(this, name, prefix, endpoint_policies, advertise);NetworkProtectNetworkResponseFields.initialize(this, id, created_at, updated_at);
        NetworkProtectNetworkResponse.initialize(this, name, prefix, endpoint_policies, advertise, id, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, prefix, endpoint_policies, advertise, id, created_at, updated_at) { 
        obj['name'] = name;
        obj['prefix'] = prefix;
        obj['endpoint_policies'] = endpoint_policies;
        obj['advertise'] = advertise || false;
        obj['id'] = id;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>NetworkProtectNetworkResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectNetworkResponse} obj Optional instance to populate.
     * @return {module:model/NetworkProtectNetworkResponse} The populated <code>NetworkProtectNetworkResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectNetworkResponse();
            NetworkProtectNetwork.constructFromObject(data, obj);
            NetworkProtectNetworkResponseFields.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('endpoint_policies')) {
                obj['endpoint_policies'] = ApiClient.convertToType(data['endpoint_policies'], [NetworkProtectEndpointPolicy]);
            }
            if (data.hasOwnProperty('advertise')) {
                obj['advertise'] = ApiClient.convertToType(data['advertise'], 'Boolean');
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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('rule_set_id')) {
                obj['rule_set_id'] = ApiClient.convertToType(data['rule_set_id'], 'String');
            }
            if (data.hasOwnProperty('roa_status')) {
                obj['roa_status'] = NetworkProtectRoaStatus.constructFromObject(data['roa_status']);
            }
            if (data.hasOwnProperty('roa_checked_at')) {
                obj['roa_checked_at'] = ApiClient.convertToType(data['roa_checked_at'], 'Date');
            }
            if (data.hasOwnProperty('roa_data_as_of')) {
                obj['roa_data_as_of'] = ApiClient.convertToType(data['roa_data_as_of'], 'Date');
            }
            if (data.hasOwnProperty('loa_status')) {
                obj['loa_status'] = NetworkProtectLoaStatus.constructFromObject(data['loa_status']);
            }
        }
        return obj;
    }


}

/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectNetworkResponse.prototype['name'] = undefined;

/**
 * The CIDR block to protect, masked to its network address. It cannot be changed after creation.
 * @member {String} prefix
 */
NetworkProtectNetworkResponse.prototype['prefix'] = undefined;

/**
 * Complete endpoint policy configuration. A network has at most one policy per region and may have no policies.
 * @member {Array.<module:model/NetworkProtectEndpointPolicy>} endpoint_policies
 */
NetworkProtectNetworkResponse.prototype['endpoint_policies'] = undefined;

/**
 * Desired advertisement state, which is not the same as observed route state. Enabling it requires approved LOA, valid ROA, and a ready default-region delivery policy. A later ROA failure does not turn an existing advertisement off; losing LOA approval or the last ready default endpoint does.
 * @member {Boolean} advertise
 * @default false
 */
NetworkProtectNetworkResponse.prototype['advertise'] = false;

/**
 * A read-only unique identifier for a Network Protect resource.
 * @member {String} id
 */
NetworkProtectNetworkResponse.prototype['id'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectNetworkResponse.prototype['created_at'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectNetworkResponse.prototype['updated_at'] = undefined;

/**
 * Optional descriptive text for the network. This metadata does not change traffic handling. Null clears it on update.
 * @member {String} description
 */
NetworkProtectNetworkResponse.prototype['description'] = undefined;

/**
 * The backend-assigned rule set applied to this network.
 * @member {String} rule_set_id
 */
NetworkProtectNetworkResponse.prototype['rule_set_id'] = undefined;

/**
 * @member {module:model/NetworkProtectRoaStatus} roa_status
 */
NetworkProtectNetworkResponse.prototype['roa_status'] = undefined;

/**
 * When Fastly last completed a ROA check. Null while the status is pending. A failed check leaves this unchanged; an old value can indicate delayed or failing checks. Null also means the controller did not report a check time.
 * @member {Date} roa_checked_at
 */
NetworkProtectNetworkResponse.prototype['roa_checked_at'] = undefined;

/**
 * When the RPKI dataset used by the last check was built. This is not the same as `roa_checked_at`; a recent check can use an older dataset. Null while the status is pending or when no dataset build time was reported.
 * @member {Date} roa_data_as_of
 */
NetworkProtectNetworkResponse.prototype['roa_data_as_of'] = undefined;

/**
 * @member {module:model/NetworkProtectLoaStatus} loa_status
 */
NetworkProtectNetworkResponse.prototype['loa_status'] = undefined;


// Implement NetworkProtectNetwork interface:
/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectNetwork.prototype['name'] = undefined;
/**
 * The CIDR block to protect, masked to its network address. It cannot be changed after creation.
 * @member {String} prefix
 */
NetworkProtectNetwork.prototype['prefix'] = undefined;
/**
 * Complete endpoint policy configuration. A network has at most one policy per region and may have no policies.
 * @member {Array.<module:model/NetworkProtectEndpointPolicy>} endpoint_policies
 */
NetworkProtectNetwork.prototype['endpoint_policies'] = undefined;
/**
 * Desired advertisement state, which is not the same as observed route state. Enabling it requires approved LOA, valid ROA, and a ready default-region delivery policy. A later ROA failure does not turn an existing advertisement off; losing LOA approval or the last ready default endpoint does.
 * @member {Boolean} advertise
 * @default false
 */
NetworkProtectNetwork.prototype['advertise'] = false;
/**
 * Optional descriptive text for the network. This metadata does not change traffic handling. Null clears it on update.
 * @member {String} description
 */
NetworkProtectNetwork.prototype['description'] = undefined;
/**
 * The backend-assigned rule set applied to this network.
 * @member {String} rule_set_id
 */
NetworkProtectNetwork.prototype['rule_set_id'] = undefined;
// Implement NetworkProtectNetworkResponseFields interface:
/**
 * A read-only unique identifier for a Network Protect resource.
 * @member {String} id
 */
NetworkProtectNetworkResponseFields.prototype['id'] = undefined;
/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectNetworkResponseFields.prototype['created_at'] = undefined;
/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectNetworkResponseFields.prototype['updated_at'] = undefined;
/**
 * @member {module:model/NetworkProtectRoaStatus} roa_status
 */
NetworkProtectNetworkResponseFields.prototype['roa_status'] = undefined;
/**
 * When Fastly last completed a ROA check. Null while the status is pending. A failed check leaves this unchanged; an old value can indicate delayed or failing checks. Null also means the controller did not report a check time.
 * @member {Date} roa_checked_at
 */
NetworkProtectNetworkResponseFields.prototype['roa_checked_at'] = undefined;
/**
 * When the RPKI dataset used by the last check was built. This is not the same as `roa_checked_at`; a recent check can use an older dataset. Null while the status is pending or when no dataset build time was reported.
 * @member {Date} roa_data_as_of
 */
NetworkProtectNetworkResponseFields.prototype['roa_data_as_of'] = undefined;
/**
 * @member {module:model/NetworkProtectLoaStatus} loa_status
 */
NetworkProtectNetworkResponseFields.prototype['loa_status'] = undefined;




export default NetworkProtectNetworkResponse;

