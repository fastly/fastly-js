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
 * The Results model module.
 * @module model/Results
 * @version 15.0.0-beta.1
 */
class Results {
    /**
     * Constructs a new <code>Results</code>.
     * The results of stats queries, may be grouped by service depending on endpoint, and aggregated over the appropriate time span.
     * @alias module:model/Results
     */
    constructor() { 
        
        Results.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Results</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Results} obj Optional instance to populate.
     * @return {module:model/Results} The populated <code>Results</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Results();

            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], 'Number');
            }
            if (data.hasOwnProperty('hits')) {
                obj['hits'] = ApiClient.convertToType(data['hits'], 'Number');
            }
            if (data.hasOwnProperty('hits_time')) {
                obj['hits_time'] = ApiClient.convertToType(data['hits_time'], 'Number');
            }
            if (data.hasOwnProperty('miss')) {
                obj['miss'] = ApiClient.convertToType(data['miss'], 'Number');
            }
            if (data.hasOwnProperty('miss_time')) {
                obj['miss_time'] = ApiClient.convertToType(data['miss_time'], 'Number');
            }
            if (data.hasOwnProperty('pass')) {
                obj['pass'] = ApiClient.convertToType(data['pass'], 'Number');
            }
            if (data.hasOwnProperty('pass_time')) {
                obj['pass_time'] = ApiClient.convertToType(data['pass_time'], 'Number');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], 'Number');
            }
            if (data.hasOwnProperty('restarts')) {
                obj['restarts'] = ApiClient.convertToType(data['restarts'], 'Number');
            }
            if (data.hasOwnProperty('hit_ratio')) {
                obj['hit_ratio'] = ApiClient.convertToType(data['hit_ratio'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth')) {
                obj['bandwidth'] = ApiClient.convertToType(data['bandwidth'], 'Number');
            }
            if (data.hasOwnProperty('body_size')) {
                obj['body_size'] = ApiClient.convertToType(data['body_size'], 'Number');
            }
            if (data.hasOwnProperty('header_size')) {
                obj['header_size'] = ApiClient.convertToType(data['header_size'], 'Number');
            }
            if (data.hasOwnProperty('req_body_bytes')) {
                obj['req_body_bytes'] = ApiClient.convertToType(data['req_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('req_header_bytes')) {
                obj['req_header_bytes'] = ApiClient.convertToType(data['req_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('resp_body_bytes')) {
                obj['resp_body_bytes'] = ApiClient.convertToType(data['resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('resp_header_bytes')) {
                obj['resp_header_bytes'] = ApiClient.convertToType(data['resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('bereq_body_bytes')) {
                obj['bereq_body_bytes'] = ApiClient.convertToType(data['bereq_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('bereq_header_bytes')) {
                obj['bereq_header_bytes'] = ApiClient.convertToType(data['bereq_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('uncacheable')) {
                obj['uncacheable'] = ApiClient.convertToType(data['uncacheable'], 'Number');
            }
            if (data.hasOwnProperty('pipe')) {
                obj['pipe'] = ApiClient.convertToType(data['pipe'], 'Number');
            }
            if (data.hasOwnProperty('synth')) {
                obj['synth'] = ApiClient.convertToType(data['synth'], 'Number');
            }
            if (data.hasOwnProperty('tls')) {
                obj['tls'] = ApiClient.convertToType(data['tls'], 'Number');
            }
            if (data.hasOwnProperty('tls_v10')) {
                obj['tls_v10'] = ApiClient.convertToType(data['tls_v10'], 'Number');
            }
            if (data.hasOwnProperty('tls_v11')) {
                obj['tls_v11'] = ApiClient.convertToType(data['tls_v11'], 'Number');
            }
            if (data.hasOwnProperty('tls_v12')) {
                obj['tls_v12'] = ApiClient.convertToType(data['tls_v12'], 'Number');
            }
            if (data.hasOwnProperty('tls_v13')) {
                obj['tls_v13'] = ApiClient.convertToType(data['tls_v13'], 'Number');
            }
            if (data.hasOwnProperty('edge_requests')) {
                obj['edge_requests'] = ApiClient.convertToType(data['edge_requests'], 'Number');
            }
            if (data.hasOwnProperty('edge_resp_header_bytes')) {
                obj['edge_resp_header_bytes'] = ApiClient.convertToType(data['edge_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('edge_resp_body_bytes')) {
                obj['edge_resp_body_bytes'] = ApiClient.convertToType(data['edge_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('edge_hit_requests')) {
                obj['edge_hit_requests'] = ApiClient.convertToType(data['edge_hit_requests'], 'Number');
            }
            if (data.hasOwnProperty('edge_miss_requests')) {
                obj['edge_miss_requests'] = ApiClient.convertToType(data['edge_miss_requests'], 'Number');
            }
            if (data.hasOwnProperty('origin_fetches')) {
                obj['origin_fetches'] = ApiClient.convertToType(data['origin_fetches'], 'Number');
            }
            if (data.hasOwnProperty('origin_fetch_header_bytes')) {
                obj['origin_fetch_header_bytes'] = ApiClient.convertToType(data['origin_fetch_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('origin_fetch_body_bytes')) {
                obj['origin_fetch_body_bytes'] = ApiClient.convertToType(data['origin_fetch_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('origin_fetch_resp_header_bytes')) {
                obj['origin_fetch_resp_header_bytes'] = ApiClient.convertToType(data['origin_fetch_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('origin_fetch_resp_body_bytes')) {
                obj['origin_fetch_resp_body_bytes'] = ApiClient.convertToType(data['origin_fetch_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('origin_revalidations')) {
                obj['origin_revalidations'] = ApiClient.convertToType(data['origin_revalidations'], 'Number');
            }
            if (data.hasOwnProperty('origin_cache_fetches')) {
                obj['origin_cache_fetches'] = ApiClient.convertToType(data['origin_cache_fetches'], 'Number');
            }
            if (data.hasOwnProperty('shield')) {
                obj['shield'] = ApiClient.convertToType(data['shield'], 'Number');
            }
            if (data.hasOwnProperty('shield_resp_body_bytes')) {
                obj['shield_resp_body_bytes'] = ApiClient.convertToType(data['shield_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_resp_header_bytes')) {
                obj['shield_resp_header_bytes'] = ApiClient.convertToType(data['shield_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_fetches')) {
                obj['shield_fetches'] = ApiClient.convertToType(data['shield_fetches'], 'Number');
            }
            if (data.hasOwnProperty('shield_fetch_header_bytes')) {
                obj['shield_fetch_header_bytes'] = ApiClient.convertToType(data['shield_fetch_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_fetch_body_bytes')) {
                obj['shield_fetch_body_bytes'] = ApiClient.convertToType(data['shield_fetch_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_fetch_resp_header_bytes')) {
                obj['shield_fetch_resp_header_bytes'] = ApiClient.convertToType(data['shield_fetch_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_fetch_resp_body_bytes')) {
                obj['shield_fetch_resp_body_bytes'] = ApiClient.convertToType(data['shield_fetch_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_revalidations')) {
                obj['shield_revalidations'] = ApiClient.convertToType(data['shield_revalidations'], 'Number');
            }
            if (data.hasOwnProperty('shield_cache_fetches')) {
                obj['shield_cache_fetches'] = ApiClient.convertToType(data['shield_cache_fetches'], 'Number');
            }
            if (data.hasOwnProperty('ipv6')) {
                obj['ipv6'] = ApiClient.convertToType(data['ipv6'], 'Number');
            }
            if (data.hasOwnProperty('otfp')) {
                obj['otfp'] = ApiClient.convertToType(data['otfp'], 'Number');
            }
            if (data.hasOwnProperty('otfp_resp_body_bytes')) {
                obj['otfp_resp_body_bytes'] = ApiClient.convertToType(data['otfp_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('otfp_resp_header_bytes')) {
                obj['otfp_resp_header_bytes'] = ApiClient.convertToType(data['otfp_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('otfp_shield_resp_body_bytes')) {
                obj['otfp_shield_resp_body_bytes'] = ApiClient.convertToType(data['otfp_shield_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('otfp_shield_resp_header_bytes')) {
                obj['otfp_shield_resp_header_bytes'] = ApiClient.convertToType(data['otfp_shield_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('otfp_manifests')) {
                obj['otfp_manifests'] = ApiClient.convertToType(data['otfp_manifests'], 'Number');
            }
            if (data.hasOwnProperty('otfp_deliver_time')) {
                obj['otfp_deliver_time'] = ApiClient.convertToType(data['otfp_deliver_time'], 'Number');
            }
            if (data.hasOwnProperty('otfp_shield_time')) {
                obj['otfp_shield_time'] = ApiClient.convertToType(data['otfp_shield_time'], 'Number');
            }
            if (data.hasOwnProperty('video')) {
                obj['video'] = ApiClient.convertToType(data['video'], 'Number');
            }
            if (data.hasOwnProperty('pci')) {
                obj['pci'] = ApiClient.convertToType(data['pci'], 'Number');
            }
            if (data.hasOwnProperty('log')) {
                obj['log'] = ApiClient.convertToType(data['log'], 'Number');
            }
            if (data.hasOwnProperty('log_bytes')) {
                obj['log_bytes'] = ApiClient.convertToType(data['log_bytes'], 'Number');
            }
            if (data.hasOwnProperty('http2')) {
                obj['http2'] = ApiClient.convertToType(data['http2'], 'Number');
            }
            if (data.hasOwnProperty('http3')) {
                obj['http3'] = ApiClient.convertToType(data['http3'], 'Number');
            }
            if (data.hasOwnProperty('waf_logged')) {
                obj['waf_logged'] = ApiClient.convertToType(data['waf_logged'], 'Number');
            }
            if (data.hasOwnProperty('waf_blocked')) {
                obj['waf_blocked'] = ApiClient.convertToType(data['waf_blocked'], 'Number');
            }
            if (data.hasOwnProperty('waf_passed')) {
                obj['waf_passed'] = ApiClient.convertToType(data['waf_passed'], 'Number');
            }
            if (data.hasOwnProperty('attack_req_body_bytes')) {
                obj['attack_req_body_bytes'] = ApiClient.convertToType(data['attack_req_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('attack_req_header_bytes')) {
                obj['attack_req_header_bytes'] = ApiClient.convertToType(data['attack_req_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('attack_logged_req_body_bytes')) {
                obj['attack_logged_req_body_bytes'] = ApiClient.convertToType(data['attack_logged_req_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('attack_logged_req_header_bytes')) {
                obj['attack_logged_req_header_bytes'] = ApiClient.convertToType(data['attack_logged_req_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('attack_blocked_req_body_bytes')) {
                obj['attack_blocked_req_body_bytes'] = ApiClient.convertToType(data['attack_blocked_req_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('attack_blocked_req_header_bytes')) {
                obj['attack_blocked_req_header_bytes'] = ApiClient.convertToType(data['attack_blocked_req_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('attack_passed_req_body_bytes')) {
                obj['attack_passed_req_body_bytes'] = ApiClient.convertToType(data['attack_passed_req_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('attack_passed_req_header_bytes')) {
                obj['attack_passed_req_header_bytes'] = ApiClient.convertToType(data['attack_passed_req_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('attack_resp_synth_bytes')) {
                obj['attack_resp_synth_bytes'] = ApiClient.convertToType(data['attack_resp_synth_bytes'], 'Number');
            }
            if (data.hasOwnProperty('imgopto')) {
                obj['imgopto'] = ApiClient.convertToType(data['imgopto'], 'Number');
            }
            if (data.hasOwnProperty('imgopto_resp_body_bytes')) {
                obj['imgopto_resp_body_bytes'] = ApiClient.convertToType(data['imgopto_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('imgopto_resp_header_bytes')) {
                obj['imgopto_resp_header_bytes'] = ApiClient.convertToType(data['imgopto_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('imgopto_shield')) {
                obj['imgopto_shield'] = ApiClient.convertToType(data['imgopto_shield'], 'Number');
            }
            if (data.hasOwnProperty('imgopto_shield_resp_body_bytes')) {
                obj['imgopto_shield_resp_body_bytes'] = ApiClient.convertToType(data['imgopto_shield_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('imgopto_shield_resp_header_bytes')) {
                obj['imgopto_shield_resp_header_bytes'] = ApiClient.convertToType(data['imgopto_shield_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('imgopto_transforms')) {
                obj['imgopto_transforms'] = ApiClient.convertToType(data['imgopto_transforms'], 'Number');
            }
            if (data.hasOwnProperty('imgvideo')) {
                obj['imgvideo'] = ApiClient.convertToType(data['imgvideo'], 'Number');
            }
            if (data.hasOwnProperty('imgvideo_frames')) {
                obj['imgvideo_frames'] = ApiClient.convertToType(data['imgvideo_frames'], 'Number');
            }
            if (data.hasOwnProperty('imgvideo_resp_header_bytes')) {
                obj['imgvideo_resp_header_bytes'] = ApiClient.convertToType(data['imgvideo_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('imgvideo_resp_body_bytes')) {
                obj['imgvideo_resp_body_bytes'] = ApiClient.convertToType(data['imgvideo_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('imgvideo_shield_resp_header_bytes')) {
                obj['imgvideo_shield_resp_header_bytes'] = ApiClient.convertToType(data['imgvideo_shield_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('imgvideo_shield_resp_body_bytes')) {
                obj['imgvideo_shield_resp_body_bytes'] = ApiClient.convertToType(data['imgvideo_shield_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('imgvideo_shield')) {
                obj['imgvideo_shield'] = ApiClient.convertToType(data['imgvideo_shield'], 'Number');
            }
            if (data.hasOwnProperty('imgvideo_shield_frames')) {
                obj['imgvideo_shield_frames'] = ApiClient.convertToType(data['imgvideo_shield_frames'], 'Number');
            }
            if (data.hasOwnProperty('status_200')) {
                obj['status_200'] = ApiClient.convertToType(data['status_200'], 'Number');
            }
            if (data.hasOwnProperty('status_204')) {
                obj['status_204'] = ApiClient.convertToType(data['status_204'], 'Number');
            }
            if (data.hasOwnProperty('status_206')) {
                obj['status_206'] = ApiClient.convertToType(data['status_206'], 'Number');
            }
            if (data.hasOwnProperty('status_301')) {
                obj['status_301'] = ApiClient.convertToType(data['status_301'], 'Number');
            }
            if (data.hasOwnProperty('status_302')) {
                obj['status_302'] = ApiClient.convertToType(data['status_302'], 'Number');
            }
            if (data.hasOwnProperty('status_304')) {
                obj['status_304'] = ApiClient.convertToType(data['status_304'], 'Number');
            }
            if (data.hasOwnProperty('status_400')) {
                obj['status_400'] = ApiClient.convertToType(data['status_400'], 'Number');
            }
            if (data.hasOwnProperty('status_401')) {
                obj['status_401'] = ApiClient.convertToType(data['status_401'], 'Number');
            }
            if (data.hasOwnProperty('status_403')) {
                obj['status_403'] = ApiClient.convertToType(data['status_403'], 'Number');
            }
            if (data.hasOwnProperty('status_404')) {
                obj['status_404'] = ApiClient.convertToType(data['status_404'], 'Number');
            }
            if (data.hasOwnProperty('status_406')) {
                obj['status_406'] = ApiClient.convertToType(data['status_406'], 'Number');
            }
            if (data.hasOwnProperty('status_416')) {
                obj['status_416'] = ApiClient.convertToType(data['status_416'], 'Number');
            }
            if (data.hasOwnProperty('status_429')) {
                obj['status_429'] = ApiClient.convertToType(data['status_429'], 'Number');
            }
            if (data.hasOwnProperty('status_500')) {
                obj['status_500'] = ApiClient.convertToType(data['status_500'], 'Number');
            }
            if (data.hasOwnProperty('status_501')) {
                obj['status_501'] = ApiClient.convertToType(data['status_501'], 'Number');
            }
            if (data.hasOwnProperty('status_502')) {
                obj['status_502'] = ApiClient.convertToType(data['status_502'], 'Number');
            }
            if (data.hasOwnProperty('status_503')) {
                obj['status_503'] = ApiClient.convertToType(data['status_503'], 'Number');
            }
            if (data.hasOwnProperty('status_504')) {
                obj['status_504'] = ApiClient.convertToType(data['status_504'], 'Number');
            }
            if (data.hasOwnProperty('status_505')) {
                obj['status_505'] = ApiClient.convertToType(data['status_505'], 'Number');
            }
            if (data.hasOwnProperty('status_530')) {
                obj['status_530'] = ApiClient.convertToType(data['status_530'], 'Number');
            }
            if (data.hasOwnProperty('status_1xx')) {
                obj['status_1xx'] = ApiClient.convertToType(data['status_1xx'], 'Number');
            }
            if (data.hasOwnProperty('status_2xx')) {
                obj['status_2xx'] = ApiClient.convertToType(data['status_2xx'], 'Number');
            }
            if (data.hasOwnProperty('status_3xx')) {
                obj['status_3xx'] = ApiClient.convertToType(data['status_3xx'], 'Number');
            }
            if (data.hasOwnProperty('status_4xx')) {
                obj['status_4xx'] = ApiClient.convertToType(data['status_4xx'], 'Number');
            }
            if (data.hasOwnProperty('status_5xx')) {
                obj['status_5xx'] = ApiClient.convertToType(data['status_5xx'], 'Number');
            }
            if (data.hasOwnProperty('object_size_1k')) {
                obj['object_size_1k'] = ApiClient.convertToType(data['object_size_1k'], 'Number');
            }
            if (data.hasOwnProperty('object_size_10k')) {
                obj['object_size_10k'] = ApiClient.convertToType(data['object_size_10k'], 'Number');
            }
            if (data.hasOwnProperty('object_size_100k')) {
                obj['object_size_100k'] = ApiClient.convertToType(data['object_size_100k'], 'Number');
            }
            if (data.hasOwnProperty('object_size_1m')) {
                obj['object_size_1m'] = ApiClient.convertToType(data['object_size_1m'], 'Number');
            }
            if (data.hasOwnProperty('object_size_10m')) {
                obj['object_size_10m'] = ApiClient.convertToType(data['object_size_10m'], 'Number');
            }
            if (data.hasOwnProperty('object_size_100m')) {
                obj['object_size_100m'] = ApiClient.convertToType(data['object_size_100m'], 'Number');
            }
            if (data.hasOwnProperty('object_size_1g')) {
                obj['object_size_1g'] = ApiClient.convertToType(data['object_size_1g'], 'Number');
            }
            if (data.hasOwnProperty('recv_sub_time')) {
                obj['recv_sub_time'] = ApiClient.convertToType(data['recv_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('recv_sub_count')) {
                obj['recv_sub_count'] = ApiClient.convertToType(data['recv_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('hash_sub_time')) {
                obj['hash_sub_time'] = ApiClient.convertToType(data['hash_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('hash_sub_count')) {
                obj['hash_sub_count'] = ApiClient.convertToType(data['hash_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('miss_sub_time')) {
                obj['miss_sub_time'] = ApiClient.convertToType(data['miss_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('miss_sub_count')) {
                obj['miss_sub_count'] = ApiClient.convertToType(data['miss_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('fetch_sub_time')) {
                obj['fetch_sub_time'] = ApiClient.convertToType(data['fetch_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('fetch_sub_count')) {
                obj['fetch_sub_count'] = ApiClient.convertToType(data['fetch_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('pass_sub_time')) {
                obj['pass_sub_time'] = ApiClient.convertToType(data['pass_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('pass_sub_count')) {
                obj['pass_sub_count'] = ApiClient.convertToType(data['pass_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('pipe_sub_time')) {
                obj['pipe_sub_time'] = ApiClient.convertToType(data['pipe_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('pipe_sub_count')) {
                obj['pipe_sub_count'] = ApiClient.convertToType(data['pipe_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('deliver_sub_time')) {
                obj['deliver_sub_time'] = ApiClient.convertToType(data['deliver_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('deliver_sub_count')) {
                obj['deliver_sub_count'] = ApiClient.convertToType(data['deliver_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('error_sub_time')) {
                obj['error_sub_time'] = ApiClient.convertToType(data['error_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('error_sub_count')) {
                obj['error_sub_count'] = ApiClient.convertToType(data['error_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('hit_sub_time')) {
                obj['hit_sub_time'] = ApiClient.convertToType(data['hit_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('hit_sub_count')) {
                obj['hit_sub_count'] = ApiClient.convertToType(data['hit_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('prehash_sub_time')) {
                obj['prehash_sub_time'] = ApiClient.convertToType(data['prehash_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('prehash_sub_count')) {
                obj['prehash_sub_count'] = ApiClient.convertToType(data['prehash_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('predeliver_sub_time')) {
                obj['predeliver_sub_time'] = ApiClient.convertToType(data['predeliver_sub_time'], 'Number');
            }
            if (data.hasOwnProperty('predeliver_sub_count')) {
                obj['predeliver_sub_count'] = ApiClient.convertToType(data['predeliver_sub_count'], 'Number');
            }
            if (data.hasOwnProperty('tls_handshake_sent_bytes')) {
                obj['tls_handshake_sent_bytes'] = ApiClient.convertToType(data['tls_handshake_sent_bytes'], 'Number');
            }
            if (data.hasOwnProperty('hit_resp_body_bytes')) {
                obj['hit_resp_body_bytes'] = ApiClient.convertToType(data['hit_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('miss_resp_body_bytes')) {
                obj['miss_resp_body_bytes'] = ApiClient.convertToType(data['miss_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('pass_resp_body_bytes')) {
                obj['pass_resp_body_bytes'] = ApiClient.convertToType(data['pass_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('segblock_origin_fetches')) {
                obj['segblock_origin_fetches'] = ApiClient.convertToType(data['segblock_origin_fetches'], 'Number');
            }
            if (data.hasOwnProperty('segblock_shield_fetches')) {
                obj['segblock_shield_fetches'] = ApiClient.convertToType(data['segblock_shield_fetches'], 'Number');
            }
            if (data.hasOwnProperty('compute_requests')) {
                obj['compute_requests'] = ApiClient.convertToType(data['compute_requests'], 'Number');
            }
            if (data.hasOwnProperty('compute_request_time_ms')) {
                obj['compute_request_time_ms'] = ApiClient.convertToType(data['compute_request_time_ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_request_time_billed_ms')) {
                obj['compute_request_time_billed_ms'] = ApiClient.convertToType(data['compute_request_time_billed_ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_ram_used')) {
                obj['compute_ram_used'] = ApiClient.convertToType(data['compute_ram_used'], 'Number');
            }
            if (data.hasOwnProperty('compute_execution_time_ms')) {
                obj['compute_execution_time_ms'] = ApiClient.convertToType(data['compute_execution_time_ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_req_header_bytes')) {
                obj['compute_req_header_bytes'] = ApiClient.convertToType(data['compute_req_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_req_body_bytes')) {
                obj['compute_req_body_bytes'] = ApiClient.convertToType(data['compute_req_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_header_bytes')) {
                obj['compute_resp_header_bytes'] = ApiClient.convertToType(data['compute_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_body_bytes')) {
                obj['compute_resp_body_bytes'] = ApiClient.convertToType(data['compute_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_1xx')) {
                obj['compute_resp_status_1xx'] = ApiClient.convertToType(data['compute_resp_status_1xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_2xx')) {
                obj['compute_resp_status_2xx'] = ApiClient.convertToType(data['compute_resp_status_2xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_3xx')) {
                obj['compute_resp_status_3xx'] = ApiClient.convertToType(data['compute_resp_status_3xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_4xx')) {
                obj['compute_resp_status_4xx'] = ApiClient.convertToType(data['compute_resp_status_4xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_5xx')) {
                obj['compute_resp_status_5xx'] = ApiClient.convertToType(data['compute_resp_status_5xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_bereq_header_bytes')) {
                obj['compute_bereq_header_bytes'] = ApiClient.convertToType(data['compute_bereq_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_bereq_body_bytes')) {
                obj['compute_bereq_body_bytes'] = ApiClient.convertToType(data['compute_bereq_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_beresp_header_bytes')) {
                obj['compute_beresp_header_bytes'] = ApiClient.convertToType(data['compute_beresp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_beresp_body_bytes')) {
                obj['compute_beresp_body_bytes'] = ApiClient.convertToType(data['compute_beresp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_bereqs')) {
                obj['compute_bereqs'] = ApiClient.convertToType(data['compute_bereqs'], 'Number');
            }
            if (data.hasOwnProperty('compute_bereq_errors')) {
                obj['compute_bereq_errors'] = ApiClient.convertToType(data['compute_bereq_errors'], 'Number');
            }
            if (data.hasOwnProperty('compute_resource_limit_exceeded')) {
                obj['compute_resource_limit_exceeded'] = ApiClient.convertToType(data['compute_resource_limit_exceeded'], 'Number');
            }
            if (data.hasOwnProperty('compute_heap_limit_exceeded')) {
                obj['compute_heap_limit_exceeded'] = ApiClient.convertToType(data['compute_heap_limit_exceeded'], 'Number');
            }
            if (data.hasOwnProperty('compute_stack_limit_exceeded')) {
                obj['compute_stack_limit_exceeded'] = ApiClient.convertToType(data['compute_stack_limit_exceeded'], 'Number');
            }
            if (data.hasOwnProperty('compute_globals_limit_exceeded')) {
                obj['compute_globals_limit_exceeded'] = ApiClient.convertToType(data['compute_globals_limit_exceeded'], 'Number');
            }
            if (data.hasOwnProperty('compute_guest_errors')) {
                obj['compute_guest_errors'] = ApiClient.convertToType(data['compute_guest_errors'], 'Number');
            }
            if (data.hasOwnProperty('compute_runtime_errors')) {
                obj['compute_runtime_errors'] = ApiClient.convertToType(data['compute_runtime_errors'], 'Number');
            }
            if (data.hasOwnProperty('edge_hit_resp_body_bytes')) {
                obj['edge_hit_resp_body_bytes'] = ApiClient.convertToType(data['edge_hit_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('edge_hit_resp_header_bytes')) {
                obj['edge_hit_resp_header_bytes'] = ApiClient.convertToType(data['edge_hit_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('edge_miss_resp_body_bytes')) {
                obj['edge_miss_resp_body_bytes'] = ApiClient.convertToType(data['edge_miss_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('edge_miss_resp_header_bytes')) {
                obj['edge_miss_resp_header_bytes'] = ApiClient.convertToType(data['edge_miss_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('origin_cache_fetch_resp_body_bytes')) {
                obj['origin_cache_fetch_resp_body_bytes'] = ApiClient.convertToType(data['origin_cache_fetch_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('origin_cache_fetch_resp_header_bytes')) {
                obj['origin_cache_fetch_resp_header_bytes'] = ApiClient.convertToType(data['origin_cache_fetch_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_hit_requests')) {
                obj['shield_hit_requests'] = ApiClient.convertToType(data['shield_hit_requests'], 'Number');
            }
            if (data.hasOwnProperty('shield_miss_requests')) {
                obj['shield_miss_requests'] = ApiClient.convertToType(data['shield_miss_requests'], 'Number');
            }
            if (data.hasOwnProperty('shield_hit_resp_header_bytes')) {
                obj['shield_hit_resp_header_bytes'] = ApiClient.convertToType(data['shield_hit_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_hit_resp_body_bytes')) {
                obj['shield_hit_resp_body_bytes'] = ApiClient.convertToType(data['shield_hit_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_miss_resp_header_bytes')) {
                obj['shield_miss_resp_header_bytes'] = ApiClient.convertToType(data['shield_miss_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('shield_miss_resp_body_bytes')) {
                obj['shield_miss_resp_body_bytes'] = ApiClient.convertToType(data['shield_miss_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('websocket_req_header_bytes')) {
                obj['websocket_req_header_bytes'] = ApiClient.convertToType(data['websocket_req_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('websocket_req_body_bytes')) {
                obj['websocket_req_body_bytes'] = ApiClient.convertToType(data['websocket_req_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('websocket_resp_header_bytes')) {
                obj['websocket_resp_header_bytes'] = ApiClient.convertToType(data['websocket_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('websocket_resp_body_bytes')) {
                obj['websocket_resp_body_bytes'] = ApiClient.convertToType(data['websocket_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('websocket_bereq_header_bytes')) {
                obj['websocket_bereq_header_bytes'] = ApiClient.convertToType(data['websocket_bereq_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('websocket_bereq_body_bytes')) {
                obj['websocket_bereq_body_bytes'] = ApiClient.convertToType(data['websocket_bereq_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('websocket_beresp_header_bytes')) {
                obj['websocket_beresp_header_bytes'] = ApiClient.convertToType(data['websocket_beresp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('websocket_beresp_body_bytes')) {
                obj['websocket_beresp_body_bytes'] = ApiClient.convertToType(data['websocket_beresp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('websocket_conn_time_ms')) {
                obj['websocket_conn_time_ms'] = ApiClient.convertToType(data['websocket_conn_time_ms'], 'Number');
            }
            if (data.hasOwnProperty('fanout_recv_publishes')) {
                obj['fanout_recv_publishes'] = ApiClient.convertToType(data['fanout_recv_publishes'], 'Number');
            }
            if (data.hasOwnProperty('fanout_send_publishes')) {
                obj['fanout_send_publishes'] = ApiClient.convertToType(data['fanout_send_publishes'], 'Number');
            }
            if (data.hasOwnProperty('kv_store_class_a_operations')) {
                obj['kv_store_class_a_operations'] = ApiClient.convertToType(data['kv_store_class_a_operations'], 'Number');
            }
            if (data.hasOwnProperty('kv_store_class_b_operations')) {
                obj['kv_store_class_b_operations'] = ApiClient.convertToType(data['kv_store_class_b_operations'], 'Number');
            }
            if (data.hasOwnProperty('object_store_class_a_operations')) {
                obj['object_store_class_a_operations'] = ApiClient.convertToType(data['object_store_class_a_operations'], 'Number');
            }
            if (data.hasOwnProperty('object_store_class_b_operations')) {
                obj['object_store_class_b_operations'] = ApiClient.convertToType(data['object_store_class_b_operations'], 'Number');
            }
            if (data.hasOwnProperty('fanout_req_header_bytes')) {
                obj['fanout_req_header_bytes'] = ApiClient.convertToType(data['fanout_req_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('fanout_req_body_bytes')) {
                obj['fanout_req_body_bytes'] = ApiClient.convertToType(data['fanout_req_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('fanout_resp_header_bytes')) {
                obj['fanout_resp_header_bytes'] = ApiClient.convertToType(data['fanout_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('fanout_resp_body_bytes')) {
                obj['fanout_resp_body_bytes'] = ApiClient.convertToType(data['fanout_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('fanout_bereq_header_bytes')) {
                obj['fanout_bereq_header_bytes'] = ApiClient.convertToType(data['fanout_bereq_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('fanout_bereq_body_bytes')) {
                obj['fanout_bereq_body_bytes'] = ApiClient.convertToType(data['fanout_bereq_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('fanout_beresp_header_bytes')) {
                obj['fanout_beresp_header_bytes'] = ApiClient.convertToType(data['fanout_beresp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('fanout_beresp_body_bytes')) {
                obj['fanout_beresp_body_bytes'] = ApiClient.convertToType(data['fanout_beresp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('fanout_conn_time_ms')) {
                obj['fanout_conn_time_ms'] = ApiClient.convertToType(data['fanout_conn_time_ms'], 'Number');
            }
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
            if (data.hasOwnProperty('bot_challenge_starts')) {
                obj['bot_challenge_starts'] = ApiClient.convertToType(data['bot_challenge_starts'], 'Number');
            }
            if (data.hasOwnProperty('bot_challenge_complete_tokens_passed')) {
                obj['bot_challenge_complete_tokens_passed'] = ApiClient.convertToType(data['bot_challenge_complete_tokens_passed'], 'Number');
            }
            if (data.hasOwnProperty('bot_challenge_complete_tokens_failed')) {
                obj['bot_challenge_complete_tokens_failed'] = ApiClient.convertToType(data['bot_challenge_complete_tokens_failed'], 'Number');
            }
            if (data.hasOwnProperty('bot_challenge_complete_tokens_checked')) {
                obj['bot_challenge_complete_tokens_checked'] = ApiClient.convertToType(data['bot_challenge_complete_tokens_checked'], 'Number');
            }
            if (data.hasOwnProperty('bot_challenge_complete_tokens_disabled')) {
                obj['bot_challenge_complete_tokens_disabled'] = ApiClient.convertToType(data['bot_challenge_complete_tokens_disabled'], 'Number');
            }
            if (data.hasOwnProperty('bot_challenge_complete_tokens_issued')) {
                obj['bot_challenge_complete_tokens_issued'] = ApiClient.convertToType(data['bot_challenge_complete_tokens_issued'], 'Number');
            }
            if (data.hasOwnProperty('bot_challenges_issued')) {
                obj['bot_challenges_issued'] = ApiClient.convertToType(data['bot_challenges_issued'], 'Number');
            }
            if (data.hasOwnProperty('bot_challenges_succeeded')) {
                obj['bot_challenges_succeeded'] = ApiClient.convertToType(data['bot_challenges_succeeded'], 'Number');
            }
            if (data.hasOwnProperty('bot_challenges_failed')) {
                obj['bot_challenges_failed'] = ApiClient.convertToType(data['bot_challenges_failed'], 'Number');
            }
            if (data.hasOwnProperty('ddos_action_downgrade')) {
                obj['ddos_action_downgrade'] = ApiClient.convertToType(data['ddos_action_downgrade'], 'Number');
            }
            if (data.hasOwnProperty('ddos_action_downgraded_connections')) {
                obj['ddos_action_downgraded_connections'] = ApiClient.convertToType(data['ddos_action_downgraded_connections'], 'Number');
            }
            if (data.hasOwnProperty('all_hit_requests')) {
                obj['all_hit_requests'] = ApiClient.convertToType(data['all_hit_requests'], 'Number');
            }
            if (data.hasOwnProperty('all_miss_requests')) {
                obj['all_miss_requests'] = ApiClient.convertToType(data['all_miss_requests'], 'Number');
            }
            if (data.hasOwnProperty('all_pass_requests')) {
                obj['all_pass_requests'] = ApiClient.convertToType(data['all_pass_requests'], 'Number');
            }
            if (data.hasOwnProperty('all_error_requests')) {
                obj['all_error_requests'] = ApiClient.convertToType(data['all_error_requests'], 'Number');
            }
            if (data.hasOwnProperty('all_synth_requests')) {
                obj['all_synth_requests'] = ApiClient.convertToType(data['all_synth_requests'], 'Number');
            }
            if (data.hasOwnProperty('all_edge_hit_requests')) {
                obj['all_edge_hit_requests'] = ApiClient.convertToType(data['all_edge_hit_requests'], 'Number');
            }
            if (data.hasOwnProperty('all_edge_miss_requests')) {
                obj['all_edge_miss_requests'] = ApiClient.convertToType(data['all_edge_miss_requests'], 'Number');
            }
            if (data.hasOwnProperty('all_status_1xx')) {
                obj['all_status_1xx'] = ApiClient.convertToType(data['all_status_1xx'], 'Number');
            }
            if (data.hasOwnProperty('all_status_2xx')) {
                obj['all_status_2xx'] = ApiClient.convertToType(data['all_status_2xx'], 'Number');
            }
            if (data.hasOwnProperty('all_status_3xx')) {
                obj['all_status_3xx'] = ApiClient.convertToType(data['all_status_3xx'], 'Number');
            }
            if (data.hasOwnProperty('all_status_4xx')) {
                obj['all_status_4xx'] = ApiClient.convertToType(data['all_status_4xx'], 'Number');
            }
            if (data.hasOwnProperty('all_status_5xx')) {
                obj['all_status_5xx'] = ApiClient.convertToType(data['all_status_5xx'], 'Number');
            }
            if (data.hasOwnProperty('origin_offload')) {
                obj['origin_offload'] = ApiClient.convertToType(data['origin_offload'], 'Number');
            }
            if (data.hasOwnProperty('request_denied_get_head_body')) {
                obj['request_denied_get_head_body'] = ApiClient.convertToType(data['request_denied_get_head_body'], 'Number');
            }
            if (data.hasOwnProperty('ddos_protection_requests_detect_count')) {
                obj['ddos_protection_requests_detect_count'] = ApiClient.convertToType(data['ddos_protection_requests_detect_count'], 'Number');
            }
            if (data.hasOwnProperty('ddos_protection_requests_mitigate_count')) {
                obj['ddos_protection_requests_mitigate_count'] = ApiClient.convertToType(data['ddos_protection_requests_mitigate_count'], 'Number');
            }
            if (data.hasOwnProperty('ddos_protection_requests_allow_count')) {
                obj['ddos_protection_requests_allow_count'] = ApiClient.convertToType(data['ddos_protection_requests_allow_count'], 'Number');
            }
            if (data.hasOwnProperty('object_storage_class_a_operations_count')) {
                obj['object_storage_class_a_operations_count'] = ApiClient.convertToType(data['object_storage_class_a_operations_count'], 'Number');
            }
            if (data.hasOwnProperty('object_storage_class_b_operations_count')) {
                obj['object_storage_class_b_operations_count'] = ApiClient.convertToType(data['object_storage_class_b_operations_count'], 'Number');
            }
            if (data.hasOwnProperty('aia_requests')) {
                obj['aia_requests'] = ApiClient.convertToType(data['aia_requests'], 'Number');
            }
            if (data.hasOwnProperty('aia_status_1xx')) {
                obj['aia_status_1xx'] = ApiClient.convertToType(data['aia_status_1xx'], 'Number');
            }
            if (data.hasOwnProperty('aia_status_2xx')) {
                obj['aia_status_2xx'] = ApiClient.convertToType(data['aia_status_2xx'], 'Number');
            }
            if (data.hasOwnProperty('aia_status_3xx')) {
                obj['aia_status_3xx'] = ApiClient.convertToType(data['aia_status_3xx'], 'Number');
            }
            if (data.hasOwnProperty('aia_status_4xx')) {
                obj['aia_status_4xx'] = ApiClient.convertToType(data['aia_status_4xx'], 'Number');
            }
            if (data.hasOwnProperty('aia_status_5xx')) {
                obj['aia_status_5xx'] = ApiClient.convertToType(data['aia_status_5xx'], 'Number');
            }
            if (data.hasOwnProperty('aia_response_usage_tokens')) {
                obj['aia_response_usage_tokens'] = ApiClient.convertToType(data['aia_response_usage_tokens'], 'Number');
            }
            if (data.hasOwnProperty('aia_origin_usage_tokens')) {
                obj['aia_origin_usage_tokens'] = ApiClient.convertToType(data['aia_origin_usage_tokens'], 'Number');
            }
            if (data.hasOwnProperty('aia_estimated_time_saved_ms')) {
                obj['aia_estimated_time_saved_ms'] = ApiClient.convertToType(data['aia_estimated_time_saved_ms'], 'Number');
            }
            if (data.hasOwnProperty('request_collapse_usable_count')) {
                obj['request_collapse_usable_count'] = ApiClient.convertToType(data['request_collapse_usable_count'], 'Number');
            }
            if (data.hasOwnProperty('request_collapse_unusable_count')) {
                obj['request_collapse_unusable_count'] = ApiClient.convertToType(data['request_collapse_unusable_count'], 'Number');
            }
            if (data.hasOwnProperty('compute_cache_operations_count')) {
                obj['compute_cache_operations_count'] = ApiClient.convertToType(data['compute_cache_operations_count'], 'Number');
            }
            if (data.hasOwnProperty('ngwaf_requests_total_count')) {
                obj['ngwaf_requests_total_count'] = ApiClient.convertToType(data['ngwaf_requests_total_count'], 'Number');
            }
            if (data.hasOwnProperty('ngwaf_requests_unknown_count')) {
                obj['ngwaf_requests_unknown_count'] = ApiClient.convertToType(data['ngwaf_requests_unknown_count'], 'Number');
            }
            if (data.hasOwnProperty('ngwaf_requests_allowed_count')) {
                obj['ngwaf_requests_allowed_count'] = ApiClient.convertToType(data['ngwaf_requests_allowed_count'], 'Number');
            }
            if (data.hasOwnProperty('ngwaf_requests_logged_count')) {
                obj['ngwaf_requests_logged_count'] = ApiClient.convertToType(data['ngwaf_requests_logged_count'], 'Number');
            }
            if (data.hasOwnProperty('ngwaf_requests_blocked_count')) {
                obj['ngwaf_requests_blocked_count'] = ApiClient.convertToType(data['ngwaf_requests_blocked_count'], 'Number');
            }
            if (data.hasOwnProperty('ngwaf_requests_timeout_count')) {
                obj['ngwaf_requests_timeout_count'] = ApiClient.convertToType(data['ngwaf_requests_timeout_count'], 'Number');
            }
            if (data.hasOwnProperty('ngwaf_requests_challenged_count')) {
                obj['ngwaf_requests_challenged_count'] = ApiClient.convertToType(data['ngwaf_requests_challenged_count'], 'Number');
            }
            if (data.hasOwnProperty('api_discovery_requests_count')) {
                obj['api_discovery_requests_count'] = ApiClient.convertToType(data['api_discovery_requests_count'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_103')) {
                obj['compute_resp_status_103'] = ApiClient.convertToType(data['compute_resp_status_103'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_200')) {
                obj['compute_resp_status_200'] = ApiClient.convertToType(data['compute_resp_status_200'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_204')) {
                obj['compute_resp_status_204'] = ApiClient.convertToType(data['compute_resp_status_204'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_206')) {
                obj['compute_resp_status_206'] = ApiClient.convertToType(data['compute_resp_status_206'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_301')) {
                obj['compute_resp_status_301'] = ApiClient.convertToType(data['compute_resp_status_301'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_302')) {
                obj['compute_resp_status_302'] = ApiClient.convertToType(data['compute_resp_status_302'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_304')) {
                obj['compute_resp_status_304'] = ApiClient.convertToType(data['compute_resp_status_304'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_400')) {
                obj['compute_resp_status_400'] = ApiClient.convertToType(data['compute_resp_status_400'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_401')) {
                obj['compute_resp_status_401'] = ApiClient.convertToType(data['compute_resp_status_401'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_403')) {
                obj['compute_resp_status_403'] = ApiClient.convertToType(data['compute_resp_status_403'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_404')) {
                obj['compute_resp_status_404'] = ApiClient.convertToType(data['compute_resp_status_404'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_416')) {
                obj['compute_resp_status_416'] = ApiClient.convertToType(data['compute_resp_status_416'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_429')) {
                obj['compute_resp_status_429'] = ApiClient.convertToType(data['compute_resp_status_429'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_500')) {
                obj['compute_resp_status_500'] = ApiClient.convertToType(data['compute_resp_status_500'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_501')) {
                obj['compute_resp_status_501'] = ApiClient.convertToType(data['compute_resp_status_501'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_502')) {
                obj['compute_resp_status_502'] = ApiClient.convertToType(data['compute_resp_status_502'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_503')) {
                obj['compute_resp_status_503'] = ApiClient.convertToType(data['compute_resp_status_503'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_504')) {
                obj['compute_resp_status_504'] = ApiClient.convertToType(data['compute_resp_status_504'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_505')) {
                obj['compute_resp_status_505'] = ApiClient.convertToType(data['compute_resp_status_505'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_status_530')) {
                obj['compute_resp_status_530'] = ApiClient.convertToType(data['compute_resp_status_530'], 'Number');
            }
            if (data.hasOwnProperty('imgopto_compute_requests')) {
                obj['imgopto_compute_requests'] = ApiClient.convertToType(data['imgopto_compute_requests'], 'Number');
            }
            if (data.hasOwnProperty('dns_billable_responses_count')) {
                obj['dns_billable_responses_count'] = ApiClient.convertToType(data['dns_billable_responses_count'], 'Number');
            }
            if (data.hasOwnProperty('dns_nonbillable_responses_count')) {
                obj['dns_nonbillable_responses_count'] = ApiClient.convertToType(data['dns_nonbillable_responses_count'], 'Number');
            }
            if (data.hasOwnProperty('upgrade')) {
                obj['upgrade'] = ApiClient.convertToType(data['upgrade'], 'Number');
            }
            if (data.hasOwnProperty('ngwaf_bot_analysis_request_count')) {
                obj['ngwaf_bot_analysis_request_count'] = ApiClient.convertToType(data['ngwaf_bot_analysis_request_count'], 'Number');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of requests processed.
 * @member {Number} requests
 */
Results.prototype['requests'] = undefined;

/**
 * Number of cache hits.
 * @member {Number} hits
 */
Results.prototype['hits'] = undefined;

/**
 * Total amount of time spent processing cache hits (in seconds).
 * @member {Number} hits_time
 */
Results.prototype['hits_time'] = undefined;

/**
 * Number of cache misses.
 * @member {Number} miss
 */
Results.prototype['miss'] = undefined;

/**
 * Total amount of time spent processing cache misses (in seconds).
 * @member {Number} miss_time
 */
Results.prototype['miss_time'] = undefined;

/**
 * Number of requests that passed through the CDN without being cached.
 * @member {Number} pass
 */
Results.prototype['pass'] = undefined;

/**
 * Total amount of time spent processing cache passes (in seconds).
 * @member {Number} pass_time
 */
Results.prototype['pass_time'] = undefined;

/**
 * Number of cache errors.
 * @member {Number} errors
 */
Results.prototype['errors'] = undefined;

/**
 * Number of restarts performed.
 * @member {Number} restarts
 */
Results.prototype['restarts'] = undefined;

/**
 * Ratio of cache hits to cache misses (between 0 and 1).
 * @member {Number} hit_ratio
 */
Results.prototype['hit_ratio'] = undefined;

/**
 * Total bytes delivered (`resp_header_bytes` + `resp_body_bytes` + `bereq_header_bytes` + `bereq_body_bytes` + `compute_resp_header_bytes` + `compute_resp_body_bytes` + `compute_bereq_header_bytes` + `compute_bereq_body_bytes` + `websocket_resp_header_bytes` + `websocket_resp_body_bytes` + `websocket_bereq_header_bytes` + `websocket_bereq_body_bytes` + `fanout_resp_header_bytes` + `fanout_resp_body_bytes` + `fanout_bereq_header_bytes` + `fanout_bereq_body_bytes`).
 * @member {Number} bandwidth
 */
Results.prototype['bandwidth'] = undefined;

/**
 * Total body bytes delivered (alias for resp_body_bytes).
 * @member {Number} body_size
 */
Results.prototype['body_size'] = undefined;

/**
 * Total header bytes delivered (alias for resp_header_bytes).
 * @member {Number} header_size
 */
Results.prototype['header_size'] = undefined;

/**
 * Total body bytes received.
 * @member {Number} req_body_bytes
 */
Results.prototype['req_body_bytes'] = undefined;

/**
 * Total header bytes received.
 * @member {Number} req_header_bytes
 */
Results.prototype['req_header_bytes'] = undefined;

/**
 * Total body bytes delivered (edge_resp_body_bytes + shield_resp_body_bytes).
 * @member {Number} resp_body_bytes
 */
Results.prototype['resp_body_bytes'] = undefined;

/**
 * Total header bytes delivered (edge_resp_header_bytes + shield_resp_header_bytes).
 * @member {Number} resp_header_bytes
 */
Results.prototype['resp_header_bytes'] = undefined;

/**
 * Total body bytes sent to origin.
 * @member {Number} bereq_body_bytes
 */
Results.prototype['bereq_body_bytes'] = undefined;

/**
 * Total header bytes sent to origin.
 * @member {Number} bereq_header_bytes
 */
Results.prototype['bereq_header_bytes'] = undefined;

/**
 * Number of requests that were designated uncachable.
 * @member {Number} uncacheable
 */
Results.prototype['uncacheable'] = undefined;

/**
 * Optional. Pipe operations performed (legacy feature).
 * @member {Number} pipe
 */
Results.prototype['pipe'] = undefined;

/**
 * Number of requests that returned a synthetic response (i.e., response objects created with the `synthetic` VCL statement).
 * @member {Number} synth
 */
Results.prototype['synth'] = undefined;

/**
 * Number of requests that were received over TLS.
 * @member {Number} tls
 */
Results.prototype['tls'] = undefined;

/**
 * Number of requests received over TLS 1.0.
 * @member {Number} tls_v10
 */
Results.prototype['tls_v10'] = undefined;

/**
 * Number of requests received over TLS 1.1.
 * @member {Number} tls_v11
 */
Results.prototype['tls_v11'] = undefined;

/**
 * Number of requests received over TLS 1.2.
 * @member {Number} tls_v12
 */
Results.prototype['tls_v12'] = undefined;

/**
 * Number of requests received over TLS 1.3.
 * @member {Number} tls_v13
 */
Results.prototype['tls_v13'] = undefined;

/**
 * Number of requests sent by end users to Fastly.
 * @member {Number} edge_requests
 */
Results.prototype['edge_requests'] = undefined;

/**
 * Total header bytes delivered from Fastly to the end user.
 * @member {Number} edge_resp_header_bytes
 */
Results.prototype['edge_resp_header_bytes'] = undefined;

/**
 * Total body bytes delivered from Fastly to the end user.
 * @member {Number} edge_resp_body_bytes
 */
Results.prototype['edge_resp_body_bytes'] = undefined;

/**
 * Number of requests sent by end users to Fastly that resulted in a hit at the edge.
 * @member {Number} edge_hit_requests
 */
Results.prototype['edge_hit_requests'] = undefined;

/**
 * Number of requests sent by end users to Fastly that resulted in a miss at the edge.
 * @member {Number} edge_miss_requests
 */
Results.prototype['edge_miss_requests'] = undefined;

/**
 * Number of requests sent to origin.
 * @member {Number} origin_fetches
 */
Results.prototype['origin_fetches'] = undefined;

/**
 * Total request header bytes sent to origin.
 * @member {Number} origin_fetch_header_bytes
 */
Results.prototype['origin_fetch_header_bytes'] = undefined;

/**
 * Total request body bytes sent to origin.
 * @member {Number} origin_fetch_body_bytes
 */
Results.prototype['origin_fetch_body_bytes'] = undefined;

/**
 * Total header bytes received from origin.
 * @member {Number} origin_fetch_resp_header_bytes
 */
Results.prototype['origin_fetch_resp_header_bytes'] = undefined;

/**
 * Total body bytes received from origin.
 * @member {Number} origin_fetch_resp_body_bytes
 */
Results.prototype['origin_fetch_resp_body_bytes'] = undefined;

/**
 * Number of responses received from origin with a `304` status code in response to an `If-Modified-Since` or `If-None-Match` request. Under regular scenarios, a revalidation will imply a cache hit. However, if using Fastly Image Optimizer or segmented caching this may result in a cache miss.
 * @member {Number} origin_revalidations
 */
Results.prototype['origin_revalidations'] = undefined;

/**
 * The total number of completed requests made to backends (origins) that returned cacheable content.
 * @member {Number} origin_cache_fetches
 */
Results.prototype['origin_cache_fetches'] = undefined;

/**
 * Number of requests from edge to the shield POP.
 * @member {Number} shield
 */
Results.prototype['shield'] = undefined;

/**
 * Total body bytes delivered via a shield.
 * @member {Number} shield_resp_body_bytes
 */
Results.prototype['shield_resp_body_bytes'] = undefined;

/**
 * Total header bytes delivered via a shield.
 * @member {Number} shield_resp_header_bytes
 */
Results.prototype['shield_resp_header_bytes'] = undefined;

/**
 * Number of requests made from one Fastly POP to another, as part of shielding.
 * @member {Number} shield_fetches
 */
Results.prototype['shield_fetches'] = undefined;

/**
 * Total request header bytes sent to a shield.
 * @member {Number} shield_fetch_header_bytes
 */
Results.prototype['shield_fetch_header_bytes'] = undefined;

/**
 * Total request body bytes sent to a shield.
 * @member {Number} shield_fetch_body_bytes
 */
Results.prototype['shield_fetch_body_bytes'] = undefined;

/**
 * Total response header bytes sent from a shield to the edge.
 * @member {Number} shield_fetch_resp_header_bytes
 */
Results.prototype['shield_fetch_resp_header_bytes'] = undefined;

/**
 * Total response body bytes sent from a shield to the edge.
 * @member {Number} shield_fetch_resp_body_bytes
 */
Results.prototype['shield_fetch_resp_body_bytes'] = undefined;

/**
 * Number of responses received from origin with a `304` status code, in response to an `If-Modified-Since` or `If-None-Match` request to a shield. Under regular scenarios, a revalidation will imply a cache hit. However, if using segmented caching this may result in a cache miss.
 * @member {Number} shield_revalidations
 */
Results.prototype['shield_revalidations'] = undefined;

/**
 * The total number of completed requests made to shields that returned cacheable content.
 * @member {Number} shield_cache_fetches
 */
Results.prototype['shield_cache_fetches'] = undefined;

/**
 * Number of requests that were received over IPv6.
 * @member {Number} ipv6
 */
Results.prototype['ipv6'] = undefined;

/**
 * Number of responses that came from the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp
 */
Results.prototype['otfp'] = undefined;

/**
 * Total body bytes delivered from the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_resp_body_bytes
 */
Results.prototype['otfp_resp_body_bytes'] = undefined;

/**
 * Total header bytes delivered from the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_resp_header_bytes
 */
Results.prototype['otfp_resp_header_bytes'] = undefined;

/**
 * Total body bytes delivered via a shield for the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_shield_resp_body_bytes
 */
Results.prototype['otfp_shield_resp_body_bytes'] = undefined;

/**
 * Total header bytes delivered via a shield for the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_shield_resp_header_bytes
 */
Results.prototype['otfp_shield_resp_header_bytes'] = undefined;

/**
 * Number of responses that were manifest files from the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_manifests
 */
Results.prototype['otfp_manifests'] = undefined;

/**
 * Total amount of time spent delivering a response from the Fastly On-the-Fly Packaging service for video-on-demand (in seconds).
 * @member {Number} otfp_deliver_time
 */
Results.prototype['otfp_deliver_time'] = undefined;

/**
 * Total amount of time spent delivering a response via a shield from the Fastly On-the-Fly Packaging service for video-on-demand (in seconds).
 * @member {Number} otfp_shield_time
 */
Results.prototype['otfp_shield_time'] = undefined;

/**
 * Number of responses with the video segment or video manifest MIME type (i.e., application/x-mpegurl, application/vnd.apple.mpegurl, application/f4m, application/dash+xml, application/vnd.ms-sstr+xml, ideo/mp2t, audio/aac, video/f4f, video/x-flv, video/mp4, audio/mp4).
 * @member {Number} video
 */
Results.prototype['video'] = undefined;

/**
 * Number of responses with the PCI flag turned on.
 * @member {Number} pci
 */
Results.prototype['pci'] = undefined;

/**
 * Number of log lines sent.
 * @member {Number} log
 */
Results.prototype['log'] = undefined;

/**
 * Total log bytes sent.
 * @member {Number} log_bytes
 */
Results.prototype['log_bytes'] = undefined;

/**
 * Number of requests received over HTTP/2.
 * @member {Number} http2
 */
Results.prototype['http2'] = undefined;

/**
 * Number of requests received over HTTP/3.
 * @member {Number} http3
 */
Results.prototype['http3'] = undefined;

/**
 * Number of requests that triggered a WAF rule and were logged.
 * @member {Number} waf_logged
 */
Results.prototype['waf_logged'] = undefined;

/**
 * Number of requests that triggered a WAF rule and were blocked.
 * @member {Number} waf_blocked
 */
Results.prototype['waf_blocked'] = undefined;

/**
 * Number of requests that triggered a WAF rule and were passed.
 * @member {Number} waf_passed
 */
Results.prototype['waf_passed'] = undefined;

/**
 * Total body bytes received from requests that triggered a WAF rule.
 * @member {Number} attack_req_body_bytes
 */
Results.prototype['attack_req_body_bytes'] = undefined;

/**
 * Total header bytes received from requests that triggered a WAF rule.
 * @member {Number} attack_req_header_bytes
 */
Results.prototype['attack_req_header_bytes'] = undefined;

/**
 * Total body bytes received from requests that triggered a WAF rule that was logged.
 * @member {Number} attack_logged_req_body_bytes
 */
Results.prototype['attack_logged_req_body_bytes'] = undefined;

/**
 * Total header bytes received from requests that triggered a WAF rule that was logged.
 * @member {Number} attack_logged_req_header_bytes
 */
Results.prototype['attack_logged_req_header_bytes'] = undefined;

/**
 * Total body bytes received from requests that triggered a WAF rule that was blocked.
 * @member {Number} attack_blocked_req_body_bytes
 */
Results.prototype['attack_blocked_req_body_bytes'] = undefined;

/**
 * Total header bytes received from requests that triggered a WAF rule that was blocked.
 * @member {Number} attack_blocked_req_header_bytes
 */
Results.prototype['attack_blocked_req_header_bytes'] = undefined;

/**
 * Total body bytes received from requests that triggered a WAF rule that was passed.
 * @member {Number} attack_passed_req_body_bytes
 */
Results.prototype['attack_passed_req_body_bytes'] = undefined;

/**
 * Total header bytes received from requests that triggered a WAF rule that was passed.
 * @member {Number} attack_passed_req_header_bytes
 */
Results.prototype['attack_passed_req_header_bytes'] = undefined;

/**
 * Total bytes delivered for requests that triggered a WAF rule and returned a synthetic response.
 * @member {Number} attack_resp_synth_bytes
 */
Results.prototype['attack_resp_synth_bytes'] = undefined;

/**
 * Number of responses that came from the Fastly Image Optimizer service. If the service receives 10 requests for an image, this stat will be 10 regardless of how many times the image was transformed.
 * @member {Number} imgopto
 */
Results.prototype['imgopto'] = undefined;

/**
 * Total body bytes delivered from the Fastly Image Optimizer service, including shield traffic.
 * @member {Number} imgopto_resp_body_bytes
 */
Results.prototype['imgopto_resp_body_bytes'] = undefined;

/**
 * Total header bytes delivered from the Fastly Image Optimizer service, including shield traffic.
 * @member {Number} imgopto_resp_header_bytes
 */
Results.prototype['imgopto_resp_header_bytes'] = undefined;

/**
 * Number of responses that came from the Fastly Image Optimizer service via a shield.
 * @member {Number} imgopto_shield
 */
Results.prototype['imgopto_shield'] = undefined;

/**
 * Total body bytes delivered via a shield from the Fastly Image Optimizer service.
 * @member {Number} imgopto_shield_resp_body_bytes
 */
Results.prototype['imgopto_shield_resp_body_bytes'] = undefined;

/**
 * Total header bytes delivered via a shield from the Fastly Image Optimizer service.
 * @member {Number} imgopto_shield_resp_header_bytes
 */
Results.prototype['imgopto_shield_resp_header_bytes'] = undefined;

/**
 * Number of transforms performed by the Fastly Image Optimizer service.
 * @member {Number} imgopto_transforms
 */
Results.prototype['imgopto_transforms'] = undefined;

/**
 * Number of video responses that came from the Fastly Image Optimizer service.
 * @member {Number} imgvideo
 */
Results.prototype['imgvideo'] = undefined;

/**
 * Number of video frames that came from the Fastly Image Optimizer service. A video frame is an individual image within a sequence of video.
 * @member {Number} imgvideo_frames
 */
Results.prototype['imgvideo_frames'] = undefined;

/**
 * Total header bytes of video delivered from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_resp_header_bytes
 */
Results.prototype['imgvideo_resp_header_bytes'] = undefined;

/**
 * Total body bytes of video delivered from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_resp_body_bytes
 */
Results.prototype['imgvideo_resp_body_bytes'] = undefined;

/**
 * Total header bytes of video delivered via a shield from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_shield_resp_header_bytes
 */
Results.prototype['imgvideo_shield_resp_header_bytes'] = undefined;

/**
 * Total body bytes of video delivered via a shield from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_shield_resp_body_bytes
 */
Results.prototype['imgvideo_shield_resp_body_bytes'] = undefined;

/**
 * Number of video responses delivered via a shield that came from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_shield
 */
Results.prototype['imgvideo_shield'] = undefined;

/**
 * Number of video frames delivered via a shield that came from the Fastly Image Optimizer service. A video frame is an individual image within a sequence of video.
 * @member {Number} imgvideo_shield_frames
 */
Results.prototype['imgvideo_shield_frames'] = undefined;

/**
 * Number of responses sent with status code 200 (Success).
 * @member {Number} status_200
 */
Results.prototype['status_200'] = undefined;

/**
 * Number of responses sent with status code 204 (No Content).
 * @member {Number} status_204
 */
Results.prototype['status_204'] = undefined;

/**
 * Number of responses sent with status code 206 (Partial Content).
 * @member {Number} status_206
 */
Results.prototype['status_206'] = undefined;

/**
 * Number of responses sent with status code 301 (Moved Permanently).
 * @member {Number} status_301
 */
Results.prototype['status_301'] = undefined;

/**
 * Number of responses sent with status code 302 (Found).
 * @member {Number} status_302
 */
Results.prototype['status_302'] = undefined;

/**
 * Number of responses sent with status code 304 (Not Modified).
 * @member {Number} status_304
 */
Results.prototype['status_304'] = undefined;

/**
 * Number of responses sent with status code 400 (Bad Request).
 * @member {Number} status_400
 */
Results.prototype['status_400'] = undefined;

/**
 * Number of responses sent with status code 401 (Unauthorized).
 * @member {Number} status_401
 */
Results.prototype['status_401'] = undefined;

/**
 * Number of responses sent with status code 403 (Forbidden).
 * @member {Number} status_403
 */
Results.prototype['status_403'] = undefined;

/**
 * Number of responses sent with status code 404 (Not Found).
 * @member {Number} status_404
 */
Results.prototype['status_404'] = undefined;

/**
 * Number of responses sent with status code 406 (Not Acceptable).
 * @member {Number} status_406
 */
Results.prototype['status_406'] = undefined;

/**
 * Number of responses sent with status code 416 (Range Not Satisfiable).
 * @member {Number} status_416
 */
Results.prototype['status_416'] = undefined;

/**
 * Number of responses sent with status code 429 (Too Many Requests).
 * @member {Number} status_429
 */
Results.prototype['status_429'] = undefined;

/**
 * Number of responses sent with status code 500 (Internal Server Error).
 * @member {Number} status_500
 */
Results.prototype['status_500'] = undefined;

/**
 * Number of responses sent with status code 501 (Not Implemented).
 * @member {Number} status_501
 */
Results.prototype['status_501'] = undefined;

/**
 * Number of responses sent with status code 502 (Bad Gateway).
 * @member {Number} status_502
 */
Results.prototype['status_502'] = undefined;

/**
 * Number of responses sent with status code 503 (Service Unavailable).
 * @member {Number} status_503
 */
Results.prototype['status_503'] = undefined;

/**
 * Number of responses sent with status code 504 (Gateway Timeout).
 * @member {Number} status_504
 */
Results.prototype['status_504'] = undefined;

/**
 * Number of responses sent with status code 505 (HTTP Version Not Supported).
 * @member {Number} status_505
 */
Results.prototype['status_505'] = undefined;

/**
 * Number of responses sent with status code 530.
 * @member {Number} status_530
 */
Results.prototype['status_530'] = undefined;

/**
 * Number of \"Informational\" category status codes delivered.
 * @member {Number} status_1xx
 */
Results.prototype['status_1xx'] = undefined;

/**
 * Number of \"Success\" status codes delivered.
 * @member {Number} status_2xx
 */
Results.prototype['status_2xx'] = undefined;

/**
 * Number of \"Redirection\" codes delivered.
 * @member {Number} status_3xx
 */
Results.prototype['status_3xx'] = undefined;

/**
 * Number of \"Client Error\" codes delivered.
 * @member {Number} status_4xx
 */
Results.prototype['status_4xx'] = undefined;

/**
 * Number of \"Server Error\" codes delivered.
 * @member {Number} status_5xx
 */
Results.prototype['status_5xx'] = undefined;

/**
 * Number of objects served that were under 1KB in size.
 * @member {Number} object_size_1k
 */
Results.prototype['object_size_1k'] = undefined;

/**
 * Number of objects served that were between 1KB and 10KB in size.
 * @member {Number} object_size_10k
 */
Results.prototype['object_size_10k'] = undefined;

/**
 * Number of objects served that were between 10KB and 100KB in size.
 * @member {Number} object_size_100k
 */
Results.prototype['object_size_100k'] = undefined;

/**
 * Number of objects served that were between 100KB and 1MB in size.
 * @member {Number} object_size_1m
 */
Results.prototype['object_size_1m'] = undefined;

/**
 * Number of objects served that were between 1MB and 10MB in size.
 * @member {Number} object_size_10m
 */
Results.prototype['object_size_10m'] = undefined;

/**
 * Number of objects served that were between 10MB and 100MB in size.
 * @member {Number} object_size_100m
 */
Results.prototype['object_size_100m'] = undefined;

/**
 * Number of objects served that were between 100MB and 1GB in size.
 * @member {Number} object_size_1g
 */
Results.prototype['object_size_1g'] = undefined;

/**
 * Time spent inside the `vcl_recv` Varnish subroutine (in seconds).
 * @member {Number} recv_sub_time
 */
Results.prototype['recv_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_recv` Varnish subroutine.
 * @member {Number} recv_sub_count
 */
Results.prototype['recv_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_hash` Varnish subroutine (in seconds).
 * @member {Number} hash_sub_time
 */
Results.prototype['hash_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_hash` Varnish subroutine.
 * @member {Number} hash_sub_count
 */
Results.prototype['hash_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_miss` Varnish subroutine (in seconds).
 * @member {Number} miss_sub_time
 */
Results.prototype['miss_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_miss` Varnish subroutine.
 * @member {Number} miss_sub_count
 */
Results.prototype['miss_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_fetch` Varnish subroutine (in seconds).
 * @member {Number} fetch_sub_time
 */
Results.prototype['fetch_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_fetch` Varnish subroutine.
 * @member {Number} fetch_sub_count
 */
Results.prototype['fetch_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_pass` Varnish subroutine (in seconds).
 * @member {Number} pass_sub_time
 */
Results.prototype['pass_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_pass` Varnish subroutine.
 * @member {Number} pass_sub_count
 */
Results.prototype['pass_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_pipe` Varnish subroutine (in seconds).
 * @member {Number} pipe_sub_time
 */
Results.prototype['pipe_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_pipe` Varnish subroutine.
 * @member {Number} pipe_sub_count
 */
Results.prototype['pipe_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_deliver` Varnish subroutine (in seconds).
 * @member {Number} deliver_sub_time
 */
Results.prototype['deliver_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_deliver` Varnish subroutine.
 * @member {Number} deliver_sub_count
 */
Results.prototype['deliver_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_error` Varnish subroutine (in seconds).
 * @member {Number} error_sub_time
 */
Results.prototype['error_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_error` Varnish subroutine.
 * @member {Number} error_sub_count
 */
Results.prototype['error_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_hit` Varnish subroutine (in seconds).
 * @member {Number} hit_sub_time
 */
Results.prototype['hit_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_hit` Varnish subroutine.
 * @member {Number} hit_sub_count
 */
Results.prototype['hit_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_prehash` Varnish subroutine (in seconds).
 * @member {Number} prehash_sub_time
 */
Results.prototype['prehash_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_prehash` Varnish subroutine.
 * @member {Number} prehash_sub_count
 */
Results.prototype['prehash_sub_count'] = undefined;

/**
 * Time spent inside the `vcl_predeliver` Varnish subroutine (in seconds).
 * @member {Number} predeliver_sub_time
 */
Results.prototype['predeliver_sub_time'] = undefined;

/**
 * Number of executions of the `vcl_predeliver` Varnish subroutine.
 * @member {Number} predeliver_sub_count
 */
Results.prototype['predeliver_sub_count'] = undefined;

/**
 * Number of bytes transferred during TLS handshake.
 * @member {Number} tls_handshake_sent_bytes
 */
Results.prototype['tls_handshake_sent_bytes'] = undefined;

/**
 * Total body bytes delivered for cache hits.
 * @member {Number} hit_resp_body_bytes
 */
Results.prototype['hit_resp_body_bytes'] = undefined;

/**
 * Total body bytes delivered for cache misses.
 * @member {Number} miss_resp_body_bytes
 */
Results.prototype['miss_resp_body_bytes'] = undefined;

/**
 * Total body bytes delivered for cache passes.
 * @member {Number} pass_resp_body_bytes
 */
Results.prototype['pass_resp_body_bytes'] = undefined;

/**
 * Number of `Range` requests to origin for segments of resources when using segmented caching.
 * @member {Number} segblock_origin_fetches
 */
Results.prototype['segblock_origin_fetches'] = undefined;

/**
 * Number of `Range` requests to a shield for segments of resources when using segmented caching.
 * @member {Number} segblock_shield_fetches
 */
Results.prototype['segblock_shield_fetches'] = undefined;

/**
 * The total number of requests that were received for your service by Fastly.
 * @member {Number} compute_requests
 */
Results.prototype['compute_requests'] = undefined;

/**
 * The total, actual amount of time used to process your requests, including active CPU time (in milliseconds).
 * @member {Number} compute_request_time_ms
 */
Results.prototype['compute_request_time_ms'] = undefined;

/**
 * The total amount of request processing time you will be billed for, measured in 50 millisecond increments.
 * @member {Number} compute_request_time_billed_ms
 */
Results.prototype['compute_request_time_billed_ms'] = undefined;

/**
 * The amount of RAM used for your service by Fastly (in bytes).
 * @member {Number} compute_ram_used
 */
Results.prototype['compute_ram_used'] = undefined;

/**
 * The amount of active CPU time used to process your requests (in milliseconds).
 * @member {Number} compute_execution_time_ms
 */
Results.prototype['compute_execution_time_ms'] = undefined;

/**
 * Total header bytes received by the Compute platform.
 * @member {Number} compute_req_header_bytes
 */
Results.prototype['compute_req_header_bytes'] = undefined;

/**
 * Total body bytes received by the Compute platform.
 * @member {Number} compute_req_body_bytes
 */
Results.prototype['compute_req_body_bytes'] = undefined;

/**
 * Total header bytes sent from Compute to end user.
 * @member {Number} compute_resp_header_bytes
 */
Results.prototype['compute_resp_header_bytes'] = undefined;

/**
 * Total body bytes sent from Compute to end user.
 * @member {Number} compute_resp_body_bytes
 */
Results.prototype['compute_resp_body_bytes'] = undefined;

/**
 * Number of \"Informational\" category status codes delivered by the Compute platform.
 * @member {Number} compute_resp_status_1xx
 */
Results.prototype['compute_resp_status_1xx'] = undefined;

/**
 * Number of \"Success\" category status codes delivered by the Compute platform.
 * @member {Number} compute_resp_status_2xx
 */
Results.prototype['compute_resp_status_2xx'] = undefined;

/**
 * Number of \"Redirection\" category status codes delivered by the Compute platform.
 * @member {Number} compute_resp_status_3xx
 */
Results.prototype['compute_resp_status_3xx'] = undefined;

/**
 * Number of \"Client Error\" category status codes delivered by the Compute platform.
 * @member {Number} compute_resp_status_4xx
 */
Results.prototype['compute_resp_status_4xx'] = undefined;

/**
 * Number of \"Server Error\" category status codes delivered by the Compute platform.
 * @member {Number} compute_resp_status_5xx
 */
Results.prototype['compute_resp_status_5xx'] = undefined;

/**
 * Total header bytes sent to backends (origins) by the Compute platform.
 * @member {Number} compute_bereq_header_bytes
 */
Results.prototype['compute_bereq_header_bytes'] = undefined;

/**
 * Total body bytes sent to backends (origins) by the Compute platform.
 * @member {Number} compute_bereq_body_bytes
 */
Results.prototype['compute_bereq_body_bytes'] = undefined;

/**
 * Total header bytes received from backends (origins) by the Compute platform.
 * @member {Number} compute_beresp_header_bytes
 */
Results.prototype['compute_beresp_header_bytes'] = undefined;

/**
 * Total body bytes received from backends (origins) by the Compute platform.
 * @member {Number} compute_beresp_body_bytes
 */
Results.prototype['compute_beresp_body_bytes'] = undefined;

/**
 * Number of backend requests started.
 * @member {Number} compute_bereqs
 */
Results.prototype['compute_bereqs'] = undefined;

/**
 * Number of backend request errors, including timeouts.
 * @member {Number} compute_bereq_errors
 */
Results.prototype['compute_bereq_errors'] = undefined;

/**
 * Number of times a guest exceeded its resource limit, includes heap, stack, globals, and code execution timeout.
 * @member {Number} compute_resource_limit_exceeded
 */
Results.prototype['compute_resource_limit_exceeded'] = undefined;

/**
 * Number of times a guest exceeded its heap limit.
 * @member {Number} compute_heap_limit_exceeded
 */
Results.prototype['compute_heap_limit_exceeded'] = undefined;

/**
 * Number of times a guest exceeded its stack limit.
 * @member {Number} compute_stack_limit_exceeded
 */
Results.prototype['compute_stack_limit_exceeded'] = undefined;

/**
 * Number of times a guest exceeded its globals limit.
 * @member {Number} compute_globals_limit_exceeded
 */
Results.prototype['compute_globals_limit_exceeded'] = undefined;

/**
 * Number of times a service experienced a guest code error.
 * @member {Number} compute_guest_errors
 */
Results.prototype['compute_guest_errors'] = undefined;

/**
 * Number of times a service experienced a guest runtime error.
 * @member {Number} compute_runtime_errors
 */
Results.prototype['compute_runtime_errors'] = undefined;

/**
 * Body bytes delivered for edge hits.
 * @member {Number} edge_hit_resp_body_bytes
 */
Results.prototype['edge_hit_resp_body_bytes'] = undefined;

/**
 * Header bytes delivered for edge hits.
 * @member {Number} edge_hit_resp_header_bytes
 */
Results.prototype['edge_hit_resp_header_bytes'] = undefined;

/**
 * Body bytes delivered for edge misses.
 * @member {Number} edge_miss_resp_body_bytes
 */
Results.prototype['edge_miss_resp_body_bytes'] = undefined;

/**
 * Header bytes delivered for edge misses.
 * @member {Number} edge_miss_resp_header_bytes
 */
Results.prototype['edge_miss_resp_header_bytes'] = undefined;

/**
 * Body bytes received from origin for cacheable content.
 * @member {Number} origin_cache_fetch_resp_body_bytes
 */
Results.prototype['origin_cache_fetch_resp_body_bytes'] = undefined;

/**
 * Header bytes received from an origin for cacheable content.
 * @member {Number} origin_cache_fetch_resp_header_bytes
 */
Results.prototype['origin_cache_fetch_resp_header_bytes'] = undefined;

/**
 * Number of requests that resulted in a hit at a shield.
 * @member {Number} shield_hit_requests
 */
Results.prototype['shield_hit_requests'] = undefined;

/**
 * Number of requests that resulted in a miss at a shield.
 * @member {Number} shield_miss_requests
 */
Results.prototype['shield_miss_requests'] = undefined;

/**
 * Header bytes delivered for shield hits.
 * @member {Number} shield_hit_resp_header_bytes
 */
Results.prototype['shield_hit_resp_header_bytes'] = undefined;

/**
 * Body bytes delivered for shield hits.
 * @member {Number} shield_hit_resp_body_bytes
 */
Results.prototype['shield_hit_resp_body_bytes'] = undefined;

/**
 * Header bytes delivered for shield misses.
 * @member {Number} shield_miss_resp_header_bytes
 */
Results.prototype['shield_miss_resp_header_bytes'] = undefined;

/**
 * Body bytes delivered for shield misses.
 * @member {Number} shield_miss_resp_body_bytes
 */
Results.prototype['shield_miss_resp_body_bytes'] = undefined;

/**
 * Total header bytes received from end users over passthrough WebSocket connections.
 * @member {Number} websocket_req_header_bytes
 */
Results.prototype['websocket_req_header_bytes'] = undefined;

/**
 * Total message content bytes received from end users over passthrough WebSocket connections.
 * @member {Number} websocket_req_body_bytes
 */
Results.prototype['websocket_req_body_bytes'] = undefined;

/**
 * Total header bytes sent to end users over passthrough WebSocket connections.
 * @member {Number} websocket_resp_header_bytes
 */
Results.prototype['websocket_resp_header_bytes'] = undefined;

/**
 * Total message content bytes sent to end users over passthrough WebSocket connections.
 * @member {Number} websocket_resp_body_bytes
 */
Results.prototype['websocket_resp_body_bytes'] = undefined;

/**
 * Total header bytes sent to backends over passthrough WebSocket connections.
 * @member {Number} websocket_bereq_header_bytes
 */
Results.prototype['websocket_bereq_header_bytes'] = undefined;

/**
 * Total message content bytes sent to backends over passthrough WebSocket connections.
 * @member {Number} websocket_bereq_body_bytes
 */
Results.prototype['websocket_bereq_body_bytes'] = undefined;

/**
 * Total header bytes received from backends over passthrough WebSocket connections.
 * @member {Number} websocket_beresp_header_bytes
 */
Results.prototype['websocket_beresp_header_bytes'] = undefined;

/**
 * Total message content bytes received from backends over passthrough WebSocket connections.
 * @member {Number} websocket_beresp_body_bytes
 */
Results.prototype['websocket_beresp_body_bytes'] = undefined;

/**
 * Total duration of passthrough WebSocket connections with end users.
 * @member {Number} websocket_conn_time_ms
 */
Results.prototype['websocket_conn_time_ms'] = undefined;

/**
 * Total published messages received from the publish API endpoint.
 * @member {Number} fanout_recv_publishes
 */
Results.prototype['fanout_recv_publishes'] = undefined;

/**
 * Total published messages sent to end users.
 * @member {Number} fanout_send_publishes
 */
Results.prototype['fanout_send_publishes'] = undefined;

/**
 * The total number of class a operations for the KV store.
 * @member {Number} kv_store_class_a_operations
 */
Results.prototype['kv_store_class_a_operations'] = undefined;

/**
 * The total number of class b operations for the KV store.
 * @member {Number} kv_store_class_b_operations
 */
Results.prototype['kv_store_class_b_operations'] = undefined;

/**
 * Use kv_store_class_a_operations.
 * @member {Number} object_store_class_a_operations
 */
Results.prototype['object_store_class_a_operations'] = undefined;

/**
 * Use kv_store_class_b_operations.
 * @member {Number} object_store_class_b_operations
 */
Results.prototype['object_store_class_b_operations'] = undefined;

/**
 * Total header bytes received from end users over Fanout connections.
 * @member {Number} fanout_req_header_bytes
 */
Results.prototype['fanout_req_header_bytes'] = undefined;

/**
 * Total body or message content bytes received from end users over Fanout connections.
 * @member {Number} fanout_req_body_bytes
 */
Results.prototype['fanout_req_body_bytes'] = undefined;

/**
 * Total header bytes sent to end users over Fanout connections.
 * @member {Number} fanout_resp_header_bytes
 */
Results.prototype['fanout_resp_header_bytes'] = undefined;

/**
 * Total body or message content bytes sent to end users over Fanout connections, excluding published message content.
 * @member {Number} fanout_resp_body_bytes
 */
Results.prototype['fanout_resp_body_bytes'] = undefined;

/**
 * Total header bytes sent to backends over Fanout connections.
 * @member {Number} fanout_bereq_header_bytes
 */
Results.prototype['fanout_bereq_header_bytes'] = undefined;

/**
 * Total body or message content bytes sent to backends over Fanout connections.
 * @member {Number} fanout_bereq_body_bytes
 */
Results.prototype['fanout_bereq_body_bytes'] = undefined;

/**
 * Total header bytes received from backends over Fanout connections.
 * @member {Number} fanout_beresp_header_bytes
 */
Results.prototype['fanout_beresp_header_bytes'] = undefined;

/**
 * Total body or message content bytes received from backends over Fanout connections.
 * @member {Number} fanout_beresp_body_bytes
 */
Results.prototype['fanout_beresp_body_bytes'] = undefined;

/**
 * Total duration of Fanout connections with end users.
 * @member {Number} fanout_conn_time_ms
 */
Results.prototype['fanout_conn_time_ms'] = undefined;

/**
 * For HTTP/2, the number of connections the limit-streams action was applied to. The limit-streams action caps the allowed number of concurrent streams in a connection.
 * @member {Number} ddos_action_limit_streams_connections
 */
Results.prototype['ddos_action_limit_streams_connections'] = undefined;

/**
 * For HTTP/2, the number of requests made on a connection for which the limit-streams action was taken. The limit-streams action caps the allowed number of concurrent streams in a connection.
 * @member {Number} ddos_action_limit_streams_requests
 */
Results.prototype['ddos_action_limit_streams_requests'] = undefined;

/**
 * The number of times the tarpit-accept action was taken. The tarpit-accept action adds a delay when accepting future connections.
 * @member {Number} ddos_action_tarpit_accept
 */
Results.prototype['ddos_action_tarpit_accept'] = undefined;

/**
 * The number of times the tarpit action was taken. The tarpit action delays writing the response to the client.
 * @member {Number} ddos_action_tarpit
 */
Results.prototype['ddos_action_tarpit'] = undefined;

/**
 * The number of times the close action was taken. The close action aborts the connection as soon as possible. The close action takes effect either right after accept, right after the client hello, or right after the response was sent.
 * @member {Number} ddos_action_close
 */
Results.prototype['ddos_action_close'] = undefined;

/**
 * The number of times the blackhole action was taken. The blackhole action quietly closes a TCP connection without sending a reset. The blackhole action quietly closes a TCP connection without notifying its peer (all TCP state is dropped).
 * @member {Number} ddos_action_blackhole
 */
Results.prototype['ddos_action_blackhole'] = undefined;

/**
 * The number of challenge-start tokens created.
 * @member {Number} bot_challenge_starts
 */
Results.prototype['bot_challenge_starts'] = undefined;

/**
 * The number of challenge-complete tokens that passed validation.
 * @member {Number} bot_challenge_complete_tokens_passed
 */
Results.prototype['bot_challenge_complete_tokens_passed'] = undefined;

/**
 * The number of challenge-complete tokens that failed validation.
 * @member {Number} bot_challenge_complete_tokens_failed
 */
Results.prototype['bot_challenge_complete_tokens_failed'] = undefined;

/**
 * The number of challenge-complete tokens checked.
 * @member {Number} bot_challenge_complete_tokens_checked
 */
Results.prototype['bot_challenge_complete_tokens_checked'] = undefined;

/**
 * The number of challenge-complete tokens not checked because the feature was disabled.
 * @member {Number} bot_challenge_complete_tokens_disabled
 */
Results.prototype['bot_challenge_complete_tokens_disabled'] = undefined;

/**
 * The number of challenge-complete tokens issued. For example, issuing a challenge-complete token after a series of CAPTCHA challenges ending in success.
 * @member {Number} bot_challenge_complete_tokens_issued
 */
Results.prototype['bot_challenge_complete_tokens_issued'] = undefined;

/**
 * The number of challenges issued. For example, the issuance of a CAPTCHA challenge.
 * @member {Number} bot_challenges_issued
 */
Results.prototype['bot_challenges_issued'] = undefined;

/**
 * The number of successful challenge solutions processed. For example, a correct CAPTCHA solution.
 * @member {Number} bot_challenges_succeeded
 */
Results.prototype['bot_challenges_succeeded'] = undefined;

/**
 * The number of failed challenge solutions processed. For example, an incorrect CAPTCHA solution.
 * @member {Number} bot_challenges_failed
 */
Results.prototype['bot_challenges_failed'] = undefined;

/**
 * The number of times the downgrade action was taken. The downgrade action restricts the client to http1.
 * @member {Number} ddos_action_downgrade
 */
Results.prototype['ddos_action_downgrade'] = undefined;

/**
 * The number of connections the downgrade action was applied to. The downgrade action restricts the connection to http1.
 * @member {Number} ddos_action_downgraded_connections
 */
Results.prototype['ddos_action_downgraded_connections'] = undefined;

/**
 * Number of cache hits for a VCL service.
 * @member {Number} all_hit_requests
 */
Results.prototype['all_hit_requests'] = undefined;

/**
 * Number of cache misses for a VCL service.
 * @member {Number} all_miss_requests
 */
Results.prototype['all_miss_requests'] = undefined;

/**
 * Number of requests that passed through the CDN without being cached for a VCL service.
 * @member {Number} all_pass_requests
 */
Results.prototype['all_pass_requests'] = undefined;

/**
 * Number of cache errors for a VCL service.
 * @member {Number} all_error_requests
 */
Results.prototype['all_error_requests'] = undefined;

/**
 * Number of requests that returned a synthetic response (i.e., response objects created with the `synthetic` VCL statement) for a VCL service.
 * @member {Number} all_synth_requests
 */
Results.prototype['all_synth_requests'] = undefined;

/**
 * Number of requests sent by end users to Fastly that resulted in a hit at the edge for a VCL service.
 * @member {Number} all_edge_hit_requests
 */
Results.prototype['all_edge_hit_requests'] = undefined;

/**
 * Number of requests sent by end users to Fastly that resulted in a miss at the edge for a VCL service.
 * @member {Number} all_edge_miss_requests
 */
Results.prototype['all_edge_miss_requests'] = undefined;

/**
 * Number of \"Informational\" category status codes delivered for all sources.
 * @member {Number} all_status_1xx
 */
Results.prototype['all_status_1xx'] = undefined;

/**
 * Number of \"Success\" status codes delivered for all sources.
 * @member {Number} all_status_2xx
 */
Results.prototype['all_status_2xx'] = undefined;

/**
 * Number of \"Redirection\" codes delivered for all sources.
 * @member {Number} all_status_3xx
 */
Results.prototype['all_status_3xx'] = undefined;

/**
 * Number of \"Client Error\" codes delivered for all sources.
 * @member {Number} all_status_4xx
 */
Results.prototype['all_status_4xx'] = undefined;

/**
 * Number of \"Server Error\" codes delivered for all sources.
 * @member {Number} all_status_5xx
 */
Results.prototype['all_status_5xx'] = undefined;

/**
 * Origin Offload measures the ratio of bytes served to end users that were cached by Fastly, over the bytes served to end users, between 0 and 1. ((`edge_resp_body_bytes` + `edge_resp_header_bytes`) - (`origin_fetch_resp_body_bytes` + `origin_fetch_resp_header_bytes`)) / (`edge_resp_body_bytes` + `edge_resp_header_bytes`).
 * @member {Number} origin_offload
 */
Results.prototype['origin_offload'] = undefined;

/**
 * Number of requests where Fastly responded with 400 due to the request being a GET or HEAD request containing a body.
 * @member {Number} request_denied_get_head_body
 */
Results.prototype['request_denied_get_head_body'] = undefined;

/**
 * Number of requests classified as a DDoS attack against a customer origin or service.
 * @member {Number} ddos_protection_requests_detect_count
 */
Results.prototype['ddos_protection_requests_detect_count'] = undefined;

/**
 * Number of requests classified as a DDoS attack against a customer origin or service that were mitigated by the Fastly platform.
 * @member {Number} ddos_protection_requests_mitigate_count
 */
Results.prototype['ddos_protection_requests_mitigate_count'] = undefined;

/**
 * Number of requests analyzed for DDoS attacks against a customer origin or service, but with no DDoS detected.
 * @member {Number} ddos_protection_requests_allow_count
 */
Results.prototype['ddos_protection_requests_allow_count'] = undefined;

/**
 * A count of the number of Class A Object Storage operations.
 * @member {Number} object_storage_class_a_operations_count
 */
Results.prototype['object_storage_class_a_operations_count'] = undefined;

/**
 * A count of the number of Class B Object Storage operations.
 * @member {Number} object_storage_class_b_operations_count
 */
Results.prototype['object_storage_class_b_operations_count'] = undefined;

/**
 * Number of requests received by AI Accelerator.
 * @member {Number} aia_requests
 */
Results.prototype['aia_requests'] = undefined;

/**
 * Number of \"Informational\" category status codes received from AI provider.
 * @member {Number} aia_status_1xx
 */
Results.prototype['aia_status_1xx'] = undefined;

/**
 * Number of \"Success\" status codes received from AI provider.
 * @member {Number} aia_status_2xx
 */
Results.prototype['aia_status_2xx'] = undefined;

/**
 * Number of \"Redirection\" received from AI provider.
 * @member {Number} aia_status_3xx
 */
Results.prototype['aia_status_3xx'] = undefined;

/**
 * Number of \"Client Error\" received from AI provider.
 * @member {Number} aia_status_4xx
 */
Results.prototype['aia_status_4xx'] = undefined;

/**
 * Number of \"Server Error\" received from AI provider.
 * @member {Number} aia_status_5xx
 */
Results.prototype['aia_status_5xx'] = undefined;

/**
 * The usage tokens associated with the response returned from the AI Accelerator cache.
 * @member {Number} aia_response_usage_tokens
 */
Results.prototype['aia_response_usage_tokens'] = undefined;

/**
 * The number of usage tokens reported by the request to the origin from AI Accelerator.
 * @member {Number} aia_origin_usage_tokens
 */
Results.prototype['aia_origin_usage_tokens'] = undefined;

/**
 * The estimated amount of time saved by responses served from the AI Accelerator semantic cache.
 * @member {Number} aia_estimated_time_saved_ms
 */
Results.prototype['aia_estimated_time_saved_ms'] = undefined;

/**
 * Number of requests that were collapsed and satisfied by a usable cache object.
 * @member {Number} request_collapse_usable_count
 */
Results.prototype['request_collapse_usable_count'] = undefined;

/**
 * Number of requests that were collapsed and unable to be satisfied by the resulting cache object.
 * @member {Number} request_collapse_unusable_count
 */
Results.prototype['request_collapse_unusable_count'] = undefined;

/**
 * Number of cache operations executed by the Compute platform.
 * @member {Number} compute_cache_operations_count
 */
Results.prototype['compute_cache_operations_count'] = undefined;

/**
 * Total number of Next-Gen WAF (Edge WAF & Core WAF) requests.
 * @member {Number} ngwaf_requests_total_count
 */
Results.prototype['ngwaf_requests_total_count'] = undefined;

/**
 * Count of Edge WAF requests with an unknown outcome.
 * @member {Number} ngwaf_requests_unknown_count
 */
Results.prototype['ngwaf_requests_unknown_count'] = undefined;

/**
 * Count of Next-Gen WAF (Edge WAF & Core WAF) requests allowed.
 * @member {Number} ngwaf_requests_allowed_count
 */
Results.prototype['ngwaf_requests_allowed_count'] = undefined;

/**
 * Count of Edge WAF requests logged.
 * @member {Number} ngwaf_requests_logged_count
 */
Results.prototype['ngwaf_requests_logged_count'] = undefined;

/**
 * Count of Next-Gen WAF (Edge WAF & Core WAF) requests blocked.
 * @member {Number} ngwaf_requests_blocked_count
 */
Results.prototype['ngwaf_requests_blocked_count'] = undefined;

/**
 * Count of Edge WAF requests timed outcome.
 * @member {Number} ngwaf_requests_timeout_count
 */
Results.prototype['ngwaf_requests_timeout_count'] = undefined;

/**
 * Count of Edge WAF requests challenged.
 * @member {Number} ngwaf_requests_challenged_count
 */
Results.prototype['ngwaf_requests_challenged_count'] = undefined;

/**
 * Number of requests processed by the API Discovery engine.
 * @member {Number} api_discovery_requests_count
 */
Results.prototype['api_discovery_requests_count'] = undefined;

/**
 * Number of responses delivered with status code 103 (Early Hints) by the Compute platform.
 * @member {Number} compute_resp_status_103
 */
Results.prototype['compute_resp_status_103'] = undefined;

/**
 * Number of responses delivered with status code 200 (Success) by the Compute platform.
 * @member {Number} compute_resp_status_200
 */
Results.prototype['compute_resp_status_200'] = undefined;

/**
 * Number of responses delivered with status code 204 (No Content) by the Compute platform.
 * @member {Number} compute_resp_status_204
 */
Results.prototype['compute_resp_status_204'] = undefined;

/**
 * Number of responses delivered with status code 206 (Partial Content) by the Compute platform.
 * @member {Number} compute_resp_status_206
 */
Results.prototype['compute_resp_status_206'] = undefined;

/**
 * Number of responses delivered with status code 301 (Moved Permanently) by the Compute platform.
 * @member {Number} compute_resp_status_301
 */
Results.prototype['compute_resp_status_301'] = undefined;

/**
 * Number of responses delivered with status code 302 (Found) by the Compute platform.
 * @member {Number} compute_resp_status_302
 */
Results.prototype['compute_resp_status_302'] = undefined;

/**
 * Number of responses delivered with status code 304 (Not Modified) by the Compute platform.
 * @member {Number} compute_resp_status_304
 */
Results.prototype['compute_resp_status_304'] = undefined;

/**
 * Number of responses delivered with status code 400 (Bad Request) by the Compute platform.
 * @member {Number} compute_resp_status_400
 */
Results.prototype['compute_resp_status_400'] = undefined;

/**
 * Number of responses delivered with status code 401 (Unauthorized) by the Compute platform.
 * @member {Number} compute_resp_status_401
 */
Results.prototype['compute_resp_status_401'] = undefined;

/**
 * Number of responses delivered with status code 403 (Forbidden) by the Compute platform.
 * @member {Number} compute_resp_status_403
 */
Results.prototype['compute_resp_status_403'] = undefined;

/**
 * Number of responses delivered with status code 404 (Not Found) by the Compute platform.
 * @member {Number} compute_resp_status_404
 */
Results.prototype['compute_resp_status_404'] = undefined;

/**
 * Number of responses delivered with status code 416 (Range Not Satisfiable) by the Compute platform.
 * @member {Number} compute_resp_status_416
 */
Results.prototype['compute_resp_status_416'] = undefined;

/**
 * Number of responses delivered with status code 429 (Too Many Requests) by the Compute platform.
 * @member {Number} compute_resp_status_429
 */
Results.prototype['compute_resp_status_429'] = undefined;

/**
 * Number of responses delivered with status code 500 (Internal Server Error) by the Compute platform.
 * @member {Number} compute_resp_status_500
 */
Results.prototype['compute_resp_status_500'] = undefined;

/**
 * Number of responses delivered with status code 501 (Not Implemented) by the Compute platform.
 * @member {Number} compute_resp_status_501
 */
Results.prototype['compute_resp_status_501'] = undefined;

/**
 * Number of responses delivered with status code 502 (Bad Gateway) by the Compute platform.
 * @member {Number} compute_resp_status_502
 */
Results.prototype['compute_resp_status_502'] = undefined;

/**
 * Number of responses delivered with status code 503 (Service Unavailable) by the Compute platform.
 * @member {Number} compute_resp_status_503
 */
Results.prototype['compute_resp_status_503'] = undefined;

/**
 * Number of responses delivered with status code 504 (Gateway Timeout) by the Compute platform.
 * @member {Number} compute_resp_status_504
 */
Results.prototype['compute_resp_status_504'] = undefined;

/**
 * Number of responses delivered with status code 505 (HTTP Version Not Supported) by the Compute platform.
 * @member {Number} compute_resp_status_505
 */
Results.prototype['compute_resp_status_505'] = undefined;

/**
 * Number of responses delivered with status code 530 by the Compute platform.
 * @member {Number} compute_resp_status_530
 */
Results.prototype['compute_resp_status_530'] = undefined;

/**
 * The number of Image Optimizer requests made from Compute services.
 * @member {Number} imgopto_compute_requests
 */
Results.prototype['imgopto_compute_requests'] = undefined;

/**
 * Number of billable DNS responses (e.g., A, CNAME).
 * @member {Number} dns_billable_responses_count
 */
Results.prototype['dns_billable_responses_count'] = undefined;

/**
 * Number of non-billable DNS responses (e.g., NODATA, NXDOMAIN).
 * @member {Number} dns_nonbillable_responses_count
 */
Results.prototype['dns_nonbillable_responses_count'] = undefined;

/**
 * Number of requests that resulted in a WebSocket upgrade.
 * @member {Number} upgrade
 */
Results.prototype['upgrade'] = undefined;

/**
 * Count of Next-Gen WAF Bot Management requests.
 * @member {Number} ngwaf_bot_analysis_request_count
 */
Results.prototype['ngwaf_bot_analysis_request_count'] = undefined;

/**
 * @member {String} service_id
 */
Results.prototype['service_id'] = undefined;

/**
 * Timestamp for the start of the time period being reported
 * @member {Number} start_time
 */
Results.prototype['start_time'] = undefined;






export default Results;

